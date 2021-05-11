import React, { PureComponent } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
            name: "Vishwas"
        }
    }

    componentDidMount(){
        setInterval(()=> {
            this.setState({
                name: 'Vishwas'
            })
        }, 2000)
    }
    
    render() {
        console.log('************** Parent comp render ********')
        return (
            <div>
                Parent Component
                <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp
