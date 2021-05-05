import React from 'react'

function ChildComponent(props) {

    return (
        <div>
            
            <button onClick={() => props.greetHandler('name')}>Children</button>
        </div>
    )
}

export default ChildComponent
