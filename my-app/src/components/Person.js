import React from 'react'

function Person({student}) {
    return (
        <div>
            <h2>
                Disciplina: {student.disciplina}<br/>
                Carga Horaria: {student.ch}<br/>
                Professor: {student.professor}<br/>
            </h2>
            <hr/>
        </div>
    )
}

export default Person
