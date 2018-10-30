import React from 'react';
import { connect } from 'react-redux'; 
import { addTodo ,deleteTodo,toggleTodo } from '../actions';
import { cloneDeep, concat, filter, forEach, isEmpty, map, parseInt } from 'lodash';

class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			todoText:[ ],
			currentTodoId:-1,   
		};
		this.addTodo=this.addTodo.bind(this);
	}	
		
	
	addTodo(){
		let name = this.refs.txtTodoName.value;
		
		if (!isEmpty(name)) {
			this.setState({	
				todoText:concat(this.state.todoText,{
					todoElem:name,
					todoId:this.state.currentTodoId+1,
					toggled:false,
				 }),
				currentTodoId:this.state.currentTodoId+1,				 
			  },
			  function(){
				  let i=this.state.currentTodoId;
					this.props.addTodo(this.state.todoText[i].todoElem,this.state.todoText[i].toggled,this.state.todoText[i].todoId,this.state.currentTodoId);
			  });
			this.refs.txtTodoName.value="";
		}
	}
		
	deleteTodo(todoId){
		let newTodos = this.props.todos[todoId];
		let currentTodoId=this.props.todos[todoId].currentTodoId;
		this.props.deleteTodo(newTodos,currentTodoId);
	}
	
	toggleTodo(id){						 
			let newTodos = this.props.todos[id];
			let currentTodoId=this.props.todos[id].currentTodoId;
			this.props.toggleTodo(newTodos,currentTodoId);	
	}
	
	showTodo(){
		const todos=this.props.todos;
		return(
			<ul>
			{
				todos.map((todo,index) => {
					return (
						<li key={index}>
							<p  style={{textDecoration: todos[index].toggled ? 'line-through':'none' }}>{todo.todoId } </p>
								
							<button onClick={ ()=>this.toggleTodo(todo.currentTodoId)}> toggle </button>
							<button onClick={ ()=> this.deleteTodo(index)}>  remove</button>
						</li>
					)
				})
			}
			</ul>
		)
	}
	
	render() { 
		return (
			<div className="App">
				<input placeholder="I have to ..."  ref="txtTodoName"    />
				<button type="button" onClick={ this.addTodo }>Add Todo</button>
				<div>
				{ this.showTodo() } 
				 </div>
			   					  
			</div>
		);
    }
}  

function mapStateToProps(state){
	return {
		todos:state
	}
}
 
export default  connect(mapStateToProps,{ addTodo ,deleteTodo,toggleTodo})(Home);
