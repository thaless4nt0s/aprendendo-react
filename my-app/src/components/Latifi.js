import React, { Component } from 'react'

class Latifi extends Component{
    constructor(){
        super()
        this.state = {
            mensagem: "George",
            counter: 0
        }
    }

    changeMessage(){
        //Se for par
        if(!(this.state.counter % 2)){
            this.setState({
                mensagem: "Russel"
    
            },
            () => this.increment()
            )
        }else{
            this.setState({
                mensagem: "George"
    
            },
            () => this.increment()
            )
        }
    }

    increment(){
        this.setState((previousValue) => ({
            counter: previousValue.counter + 1
        }), console.log("VALOR: ",this.state.counter))
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