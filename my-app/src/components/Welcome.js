import React, { Component } from 'react'

class Welcome extends Component {
    constructor(){
        super()
        this.state = {
            message: "A.K.A"
        }
    }

    changeMessage(){
        this.setState({
            message:  "Obrigado por clicar"
        })
    }


    render() {
        return (
            <div>
                <h1>
                    Class {this.state.message}
                </h1>
                <button onClick={()=> this.changeMessage()}>
                    a.k.a
                </button>
            </div>
        )
    }


}
export default Welcome
