import React, { Component } from 'react'

class Latifi extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            msg: "George",
            count: 0
        }
    }
    
    changeName(){
        if(!(this.state.count % 2)){
            this.setState({
                msg: "Russel"
            })
        }else{
            this.setState({
                msg: "George"
            })
        }
        this.increment()
    }

    increment(){
        this.setState((prevResult) => ({
            count: prevResult.count + 1
        }))
    }

    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={() => this.changeName()}>ChangeName</button>
            </div>
        )
    }
}

export default Latifi
