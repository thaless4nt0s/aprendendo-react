import React from 'react'
import Person from './Person'
function NameList() {
    const names = ['Bruce','Clark','Diana','Bruce']

    const persons = [
        {
            id: 0,
            name: "Bruce",
            age: 30,
            skill: "React"
        },
        {
            id: 1,
            name: "Clark",
            age: 26,
            skill: "Angular"
        },
        {
            id: 2,
            name: "Diana",
            age: 28,
            skill: "Vue"
        }
    ]
    
    const nameList = names.map((name,index) =>
            <h2 key={index}>{name}</h2>
        )

    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList