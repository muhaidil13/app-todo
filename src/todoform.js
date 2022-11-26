import React, { Component } from 'react'
import { v4 as uuid } from 'uuid';
import "./todoform.css"

class TodoForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            task:""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(evt){
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }
    handleSubmit(evt){
        evt.preventDefault();
        this.props.create({...this.state, id:uuid(), is_finish:false})
        this.setState({task:""})
    }
    render() {
        return (
            <form className='Todoform' onSubmit={this.handleSubmit}>
                <label htmlFor='task'>New Todo</label>   
                <input 
                    type="text" 
                    id='task' 
                    name='task' 
                    placeholder='New Todo'
                    value={this.state.task}
                    onChange={this.handleChange}
                    />
                    <button>Submit</button>
            </form>
        );
    }
}
export default TodoForm