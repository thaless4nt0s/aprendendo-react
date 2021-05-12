import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {
    constructor(props) {
        super(props)
        this.objInput = React.createRef()    
    }

    clickHandler = ()=>{
        this.objInput.current.FocusInput()
    }
    
    render() {
        return (
            <div>
                <Input ref={this.objInput}/>
                <button onClick={this.clickHandler}>Focus Me</button>            
            </div>
        )
    }
}

export default FocusInput
