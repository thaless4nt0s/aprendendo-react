import React, { Component } from 'react'

class ClassClick extends Component {
    click(){
        console.log("Click Button")
    }
    render() {
        return (
            <div>
                <button onClick={this.click}>click me</button>                
            </div>
        )
    }
}

export default ClassClick
