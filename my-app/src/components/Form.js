import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: '',
            comments: "",
            topic: 'vue'
        }
    }
    handleUsernameChange = (event)=>{
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = event =>{
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicsChange = event => {
        this.setState({
            topic: event.target.value
        })
    }

    handlerSubmit = event =>{
        alert(`${this.state.username} || ${this.state.topic} || ${this.state.comments}`)
        event.preventDefault()
    }
    render() {
        const {username, comments, topic} = this.state
        return (
            <form onSubmit={this.handlerSubmit}>
                <div>
                    <label>UserName</label>
                    <input type='text' value={username} onChange={this.handleUsernameChange}/>
                </div>
                <div>
                    <textarea value={comments} onChange={this.handleCommentsChange}>
                    </textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handleTopicsChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form
