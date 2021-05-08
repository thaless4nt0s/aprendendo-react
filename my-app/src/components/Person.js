import React from 'react'

function Person({livros}) {
    return (
        <div>
            <p>Livro: {livros.livro}</p>
            <p>Autor: {livros.autor}</p>
            <hr/>
        </div>
    )
}

export default Person
