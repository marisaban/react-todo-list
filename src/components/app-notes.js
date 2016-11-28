import React from 'react';
import CreateTodo from './create-todo';
import TodosList from './todos-list';

const todos = [
{
	task: 'make React tutorial',
	isCompleted: true
},
{
	task: 'eat dinner',
	isCompleted: true
}
];

export default class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			todos: todos
		}
	}

	render(){
		return (
			<div>
				<h1> React ToDos App!!</h1>
			{/*  onSubmit, this reads from the create-todo file. .bind(this) keeps the context
			from the setState above. A way of making the context stay within this component
			*/}
				<CreateTodo createTask={this.createTask.bind(this)} />
			{/*any components here is automatically passed into the TodosList file
			line 7-8 todos-list.js */}
				<TodosList 
						todos={this.state.todos}
						toggleTask={this.toggleTask.bind(this)}
					{/* in our todosList, we have it passed already in 
					the expression const props = _.omit...*/}
						saveTask = {this.saveTask.bind(this)}
				/>
			</div>
			);
	}

	toggleTask(task) {
	{/*find the todo in the array that we're editing  we use =? as ES6 shorthand 
	to indicate an implicit return. Find the todo task that matches the task we 
	pass in "task" */}
	const foundTodo = _.find(this.state.todos, todo => todo.task === task);
	{/* Swap the foundTodo, whatever it is, change it to the opposite*/}
	foundTodo.isCompleted = !foundTodo.isCompleted;
	{/* Refresh the app by doing setState*/}
	this.setState({ todos: this.state.todos });
	}

{/* This function adds the task that was created from the component in create-todo. 
 adds it to the array */}
	createTask(task) {
		this.state.todos.push({
		{/*ES6 syntax, otherwise it would be like task: task*/}
			task, 
			isCompleted: false
		});
	{/*re-render the page and only render what's different. todos will be the new array 
with the new tasks in it*/}
		this.setState({ todos: this.state.todos });
	}

{/* EDIT FUNCTIONALITY: oldTask matches the array in const todos, then replace 
oldTask with newTask */}
	saveTask(oldTask, newTask){
		const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
{/*replacing oldTask with newTask*/}
		foundTodo.task = newTask;
{/*refresh the app then pass this into our <todosList />above*/}
		this.setState({ todos: this.state.todos});
	}

	deleteTask(taskToDelete){
		{/*loadash method, removes item from the array after matching*/}
		_.remove()
		
	}

}