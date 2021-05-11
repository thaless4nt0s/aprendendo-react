import React, { Fragment } from 'react'

function Columns() {
    const itens = []
    return (
        <Fragment>
            {
                itens.map(item =>(
                    <Fragment key={item.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </Fragment>
                ))
            }
            <td>name</td>
            <td>Vishwas</td>
        </Fragment>
    )
}

export default Columns
