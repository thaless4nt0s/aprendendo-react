import React, { Component } from 'react'

class Welcome extends Component {
    
    render() {
        const {name, heroName} = this.props
        //const {state1, state2} = this.state
        return (
            <div>
                <h1>Name:   {name}</h1>
                <h1>HeroName: {heroName}</h1>
            </div>
        )
    }
}

export default Welcome
