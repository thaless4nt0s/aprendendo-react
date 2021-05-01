import React, { Component } from 'react'

class Latifi extends Component{
    constructor(){
        super()
        this.state = {
            mensagem: "George"
        }
    }

    changeMessage(){
        this.setState({
            mensagem: "Russel"
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.mensagem}</h1>
                <button onClick={() => this.changeMessage()}>Russel</button>
            </div>
        )
    }
}

export default Latifi