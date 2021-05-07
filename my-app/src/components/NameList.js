import React from 'react'
import Person from './Person'

function NameList() {
    const semestre = [
        {
            id: 0,
            disciplina: "Física II",
            ch: 80,
            professor: "Antonio Carlos"
        },
        {
            id: 1,
            disciplina: "Programação Linear",
            ch: 80,
            professor: "Adriano Tavares"
        },
        {
            id: 2,
            disciplina: "Probabilidade e Estatística",
            ch: 80,
            professor: "Marcos Cirineu"
        },
        {
            id: 0,
            disciplina: "Calculo Numerico",
            ch: 80,
            professor: "Genilson Gomes"
        },
        {
            id: 0,
            disciplina: "Lógica para Computação",
            ch: 80,
            professor: "Thiago Alves"
        },
        {
            id: 0,
            disciplina: "POO",
            ch: 80,
            professor: "Igor Rafael"
        },
    ]
    const aluno = semestre.map(student =>
        <Person student={student} />
    )
    return (
        <div>
            <p>Meu semestre</p>
            <div>
                {aluno}
            </div>
        </div>
    )
}

export default NameList
