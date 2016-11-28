import React from 'react';


export default class TodosLists extends React.Component {
	renderItems(){
		return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} 
			{...todo} />);
	}

	render(){
		/* this prints out the array from app.js 
		console.log(this.props.todos); */
		return (
			<form onSubmit={this.handleCreate.bind(this)}>
		
				<input type="text" placeholder="What do I need to do?" ref="createInput"/>
				<button> Create </button>
			</form>
			);
	}


	handleCreate(event){
		event.preventDefault();

	{/*we are creating this task and analyzing it to see if it's wrong*/}
		const createInput = this.refs.createInput;
		const task = createInput.value;
		const validateInput = this.validateInput(task);

		{/* this passes the value into the createTask method. */}
		this.props.createTask(this.refs.createInput.value);
		{/* this empties the string once you click submit */}
		this.refs.createInput.value = '';
	}

	validateInput(task){
		if (!task) {
			return 'Please enter a task';
		{/*need list of todos here to match which we need to pass in, so in App.js 
		we want to pass in the todos in the createTask*/}
		}else if (_.find(this.props.))
	}
}