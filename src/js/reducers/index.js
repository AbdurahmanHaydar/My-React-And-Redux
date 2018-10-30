import {ADD_TODO,DELETE_TODO,TOGGLE_TODO} from '../constants';
import { cloneDeep, concat, filter, forEach, isEmpty, map, parseInt } from 'lodash';

const deleteById = (state ={},id) => {
	 
				
	const todos=state.filter(todos => todos.todoId!==id);
	
	
	return todos;
}


const todos = (state = [],action) => {
	let todos = null;
	switch(action.type){
		case ADD_TODO:
			
			todos =[
				...state,{
					todoElem:action.todoElem,
					toggled:action.toggled,
					todoId:action.todoId,
					currentTodoId:action.currentTodoId, 	
				}
			];
			console.log(todos);
			return todos;
			
		case DELETE_TODO:
		
			todos=deleteById(state,action.currentTodoId);
			
			console.log(state);
			//console.log(todos].currentTodoId);
			console.log(todos);
			
			
			
			return todos;
			
		case TOGGLE_TODO:
					
					todos = state.map(todo => {
						if(todo.todoId!==action.todoId){
							return todo;
						}
		
						return  {
							todoElem:todo.todoElem,
							toggled:!todo.toggled,
							todoId:todo.todoId,
							currentTodoId:todo.currentTodoId
						};
					});
					console.log(todos);
					return todos;
		default:
			return state;
	}
}

export default todos;