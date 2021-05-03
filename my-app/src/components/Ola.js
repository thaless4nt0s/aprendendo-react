import React, { Component } from 'react'

class Ola extends Component{
    constructor(){
        super()
        this.state = {
            msg: "Salve"
        }
    }

    changeMessage(){
        this.setState({
            msg: "Galera"
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={() => this.changeMessage()}>galera</button>
            </div>
        )
    }
}

export default Ola