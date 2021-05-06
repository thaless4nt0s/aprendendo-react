import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        if (this.state.isLoggedIn) {
            return (
                <div>Welcome VishWas</div>
            )
        } else {
            return (
                <div>Welcome Guest</div>
            )
        }
    }
}

export default UserGreeting
