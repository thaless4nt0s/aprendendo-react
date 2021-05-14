import React, { Component } from 'react'
import ComponentE from './ComponentE'
import UserContext from './CreateContext'

class ComponentF extends Component {
    static contextType = UserContext
    render() {
        return (
            <div>
                <ComponentE/>  
                <div>Component F context {this.contextType}</div>
            </div>
        )
    }
}



export default ComponentF
