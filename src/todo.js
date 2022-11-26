import React, { Component } from 'react'
import "./todo.css"

class Todo extends Component{
    constructor(props){
        super(props);
        this.state ={
            isEditing:false,
            task:this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleBtn = this.toggleBtn.bind(this);
        this.handleupdate = this.handleupdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleRemove(){
        this.props.removeTodo(this.props.id)
    }
    toggleBtn(){
        this.setState({isEditing:!this.state.isEditing})
    }
    handleupdate(evt){
        evt.preventDefault()
        this.props.updateTodo(this.props.id, this.state.task)
        this.setState({isEditing:false})
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]:evt.target.value
        })
    }
    handleToggle(evt){
        this.props.togglefinish(this.props.id)
    }
    render(){
        let result;
        if(this.state.isEditing){
            result = (
                <div className='Todo'>
                    <form className='Todo-Edit' onSubmit={this.handleupdate}>
                        <input 
                            type='text' 
                            name='task'
                            value={this.state.task}
                            onChange={this.handleChange}
                        />
                        <button>Save</button>
                    </form>
                </div>
            )
        }else{
            result = <div className='Todo'>
                <li className={this.props.is_finish ? "Todo-task finish":"Todo-task"} onClick={this.handleToggle}>
                    {this.props.task}
                </li>
                <div className='Todo-Wraper'>
                    <button onClick={this.toggleBtn}><i class='fas fa-pen'/></button>
                    <button onClick={this.handleRemove}><i class='fas fa-trash'/></button>
                </div>
            </div>
        }
        return result
    }
}
export default Todo