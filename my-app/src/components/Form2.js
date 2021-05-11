import React, { Component } from 'react'

class Form2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            age: '',
            characteristics: "",
            skills: ""

        }
    }

    handleNameChange = event => {
        this.setState({
            name: event.target.value
        })
    }

    handleAgeChange = event => {
        this.setState({
            age: event.target.value
        })
    }

    handleSkillChange = event => {
        this.setState({
            skills: event.target.value
        })
    }

    handleSubmitChange = event => {
        alert(`Name: ${this.state.name}\nAge: ${this.state.age}
Characteristics: ${this.state.characteristics}\nSkills: ${this.state.skills}`)
        event.preventDefault()
    }

    handleCharacteristicsChange = event => {
        this.setState({
            characteristics: event.target.value
        })
    }

    render() {
        const { name, age, characteristics, skills } = this.state
        return (
            <form onSubmit={this.handleSubmitChange}>
                <div>
                    <label>Name</label>
                    <input
                        type='text'
                        value={name}
                        onChange={this.handleNameChange}
                    />
                </div>
                <div>
                    <label>Age</label>
                    <input
                        type='number'
                        value={age}
                        onChange={this.handleAgeChange}
                    />
                </div>

                <label>Characteristics</label>
                <textarea value={characteristics} onChange={this.handleCharacteristicsChange}>
                </textarea>

                <div>
                    <label>Skill</label>
                    <select value={skills} onChange={this.handleSkillChange}>
                        <option value='react'>React</option>
                        <option value='bootstrap'>Bootstrap</option>
                        <option value='php'>php</option>
                    </select>
                </div>
                <input type="submit" />
            </form>
        )
    }
}

export default Form2
