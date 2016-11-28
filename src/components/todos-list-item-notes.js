import React from 'react';

export default class TodosListItem extends React.Component {

	constructor(props){
		super(props);

		this.state={
			isEditing: false
		};
	}

	renderTaskSection(){
	{/*ES6 destructoring, take properties inside an object, props has task and isCompleted in it 
	cause they're passed in from todos list  and use them as variables*/}
		const { task, isCompleted } = this.props;

	{/*dynamic way to stylize the text*/}
		const taskStyle = {
		{/* this says IF isComplete is TRUE then it should be green otherwise
		it's red */}
			color: isCompleted ? 'green' : 'red',
			cursor: 'pointer'
		};

		if (this.state.isEditing){
			return (
				<td>
					{/* makes it so our enter button works as well*/}
						<form onSubmit={this.onSaveClick.bind(this)}>
					{/*makes the text into an input field*/}
					{/*with react, if we just use value we would have an onChange handler which would 
					do something everytime the input changes but we don't want that so we enter a defaultValue*/}
					{/* we use ref to be able to grab whatever is in that input*/}
						<input type="text" defaultValue={task} ref="editInput" />
						</form>
					</td>
			)
		}

		return (
			<td style={taskStyle}
		{/* want to mod the array in our App.js, we want to access another method, 
		toggleTask and props cause we want to pass in from App.js. 
		We use .bind(this) because we want to pass in the task from above (const {task, isCompleted})  */}
				onClick={this.props.toggleTask.bind(this, task)}
			}
			>
			{task}</td>
			);
	}

	renderActionsSection(){
		if (this.state.isEditing) {
			return(
				<td>
			{/*connect our save feature to this button*/}
					<button onClick={this.onSaveClick.bind(this)}>Save </button>
					<button onClick={this.onCancelClick.bind(this)}>Cancel</button>
				</td>
				);
		}

		return (
				<td>
					<button onClick={this.onEditClick.bind(this)}>Edit </button>
					<button>Delete </button>
					</td>
			);
	}

	render(){
		return (
			
			<thead>
				<tr>
					{this.renderTaskSection()}
					{this.renderActionsSection()}
				</tr>
			</thead>
			
			);
	}

	onEditClick(){
		this.setState({ isEditing: true});
	}

	onCancelClick(){
		this.setState({ isEditing: false});
	}

{/*this goes in hand wtih connecting the button wtih the save feature*/}
{/* pass in event (oldTask and newTask)*/} {/*since this feature follows editing an input box, 
we need to add that to the renderTaskSEction*/}
	onSaveClick(event){
	{/*prevent the onSubmit from firing default behavior*/}
	event.preventDefault();
{/*	we need to pass this in to match the array*/}
	const oldTask = this.props.task; 
{/*grabs the content from above, using the ref*/}
	const newTask = this.refs.editInput.value;
		this.props.saveTask(oldTask, newTask);
	{/*takes away the input box after we save*/}
		this.setState({ isEditing: false });
	}
}