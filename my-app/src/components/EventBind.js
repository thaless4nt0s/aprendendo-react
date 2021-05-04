import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            msg: "Salve Galera"
        }

        //this.changeName = this.changeName.bind(this)
    }
    
    /*
    changeName = () =>{
        this.setState({
            msg: "Suave ?"
        })
    }*/

    changeName(){
        this.setState({
            msg: "Beleza ?"
        })
    }


    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                {/*<button onClick={this.changeName}>Click</button>*/}
                {/*<button onClick={() => this.changeName()}>Click</button>*/}
                <button onClick={this.changeName.bind(this)}>click</button>
            </div>
        )
    }
}

export default EventBind
