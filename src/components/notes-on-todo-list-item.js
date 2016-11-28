import React from 'react';

export default class TodosListItem extends React.Component {
{/*Normally, setting states should be done in a top level component 
so this isn't best practice*/}	

{/* 
NUMBER 1 
creating the state allows us to make changes upon user interactions, 
we set the state to default, is Editing false. */}
	constructor(props){
		super(props);

		this.state={
			isEditing: false
		};
	}

{/* NUMBER 4 
This renders the change in the button element if the onEditClick 
is called upon by a click event*/}
	renderActionsSection(){
		if (this.state.isEditing) {
			return(
				<td>
					<button>Save </button>
					<button>Cancel</button>
				</td>
				);
		}

		return (
				<td>{/* NUMBER 2
				onClick, this button will call the function onEditClick 
				which will change the state 
					.bind(this) maintains the this context in this component. Used
					only for click events in react. 
				*/}
					<button onClick={this.onEditClick.bind(this)}>Edit </button>
					<button>Delete </button>
					</td>
			);
	}

	render(){
		return (
			
			<thead>
				<tr>
					<td>{this.props.task}</td>
					{this.renderActionsSection()}
				</tr>
			</thead>
			
			);
	}
{/* NUMBER 3
This function is activated by onClick in the button element, this sets the state to true*/}
	onEditClick(){
		this.setState({ isEditing: true});
	}
}