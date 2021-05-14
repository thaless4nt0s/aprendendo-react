import React, { Component } from 'react'
import ComponentF from './ComponentF'
import { UserConsumer } from './CreateContext'

class ComponentE extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (username) =>{
                        return(<h1>Hello {username}</h1>)
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentE
