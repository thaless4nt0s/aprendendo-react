import React, { Component } from 'react'
import WithCounter from './WithCounter'
class ClickCounter extends Component {

    render() {
        const {count, incrementCount, name} = this.props
        return (
            <div>
                <button onClick={incrementCount}>
                    {name}
                    Click {count} times
                </button>
            </div>
        )
    }
}

export default WithCounter(ClickCounter,4)
