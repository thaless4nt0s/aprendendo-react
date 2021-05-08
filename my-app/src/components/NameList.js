import React from 'react'
import Person from './Person'
function NameList() {
    const livros = [
        {
            id: 0,
            autor: "Cecilia Meirelles",
            livro: "A volta dos que nao foram"
        },
        {
            id: 1,
            autor: "Joseph Murphy",
            livro: "O poder do subconsciente"
        },
        {
            id: 2,
            autor: "Autor aleatorio",
            livro: "Assassins Creed"
        }
    ]

    const listaLivros = livros.map(livro => (
        <Person livros={livro}/>
    ))

    return (
        <div>
            {listaLivros}
        </div>
    )
}

export default NameList