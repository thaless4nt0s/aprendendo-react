import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler("Child")}>CLICK ME</button>
        </div>
    )
}

export default ChildComponent
