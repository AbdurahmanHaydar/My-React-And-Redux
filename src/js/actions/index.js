import {ADD_TODO,DELETE_TODO,TOGGLE_TODO } from '../constants';

export const addTodo = (todoElem,toggled,todoId,currentTodoId) => {
	const action = {
		type: ADD_TODO,
		todoElem,
		toggled,
		todoId,
		currentTodoId,
	}
	return action;
}

export const deleteTodo = (newTodos,currentTodoId) => {
	const action = {
		type:DELETE_TODO,
		todoId:newTodos.todoId,
		currentTodoId,
	}
	return action;
}

export const toggleTodo = (newTodos,currentTodoId) =>{
	const action ={
		type:TOGGLE_TODO,
		todoElem:newTodos.todoElem,
		todoId:newTodos.todoId,
		toggled:newTodos.toggled,
		currentTodoId:currentTodoId
	}
	return action;
} 