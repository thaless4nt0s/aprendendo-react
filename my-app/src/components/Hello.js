import React from 'react'

const Hello = () => {
    /*return (
        <div>
            <h1>Salve galerinha</h1>
        </div>
    )*/
    return React.createElement(
            'div',
            {id: 'hello',className: "dummyClas"},
            React.createElement('h1',null,"Salve galerinha")
        )

}

export default Hello
