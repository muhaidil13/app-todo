import React, { Component } from 'react'
import Todo from './todo';
import TodoForm from './todoform';
import "./todolist.css"

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state= {
            todos:[]
        }
        this.create = this.create.bind(this)
        this.remove = this.remove.bind(this)
        this.update = this.update.bind(this)
        this.togglefinish = this.togglefinish.bind(this)
    }
    create(newlist){
        this.setState({
            todos:[...this.state.todos, newlist]
        })
    }
    remove(id){
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        });
    }  
    update(id, task){
        const updateTodo = this.state.todos.map(todo => {
            if(todo.id === id){
                // ...todo akan mengembalikan idnya juga
                return {...todo, task}
            }
            return todo
        })
        this.setState({todos:updateTodo})
    }
    togglefinish(id){
        const updateTodo = this.state.todos.map(todo => {
            if(todo.id === id){
                // ...todo akan mengembalikan idnya juga
                return {...todo, is_finish: !todo.is_finish}
            }
            return todo
        })
        this.setState({todos:updateTodo})
    }
    render(){
        const listBox = this.state.todos.map(li => {
            return <Todo 
                        key={li.id} 
                        id={li.id} 
                        task={li.task} 
                        removeTodo={this.remove}
                        is_finish={li.is_finish}
                        updateTodo={this.update}
                        togglefinish={this.togglefinish}
                    />
        })
        return(
            <div className='TodoList'>
                <h1>Todo List <span>Simple React TodoList</span></h1>
                <ul>{listBox}</ul>
                <TodoForm create={this.create} />
            </div>
        )
    }
}

export default TodoList