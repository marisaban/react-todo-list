import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

export default class TodosLists extends React.Component {
	renderItems(){
	{/*passing our ToggleTask into here. We're passing in a few methods, like
	edit and delete. Since we don't want to pass in every single prop, we use a 
	loaddash method called _.omit. We omit 'todos' */}
		const props = _.omit(this.props, 'todos');

		return _.map(this.props.todos, (todo, index) => <TodosListItem key={index}
		{/*We are passing in our props but since we want to omit the todos, we added the 
		expression above (const props)*/} 
			{...todo} {...props} />);
	}

	render(){
		/* this prints out the array from app.js 
		console.log(this.props.todos); */
		return (
			<table>
				<TodosListHeader />
				<tbody>
					{this.renderItems()}
				</tbody>
			</table>
			);
	}
}