import React, { Component } from 'react'

class User extends Component {
    render() {
        return (
            <div>
                {this.props.render('Vishwas')}
            </div>
        )
    }
}

export default User
