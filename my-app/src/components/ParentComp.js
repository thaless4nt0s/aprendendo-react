import React, { PureComponent } from 'react'
import MemoComp from './MemoComp'


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
                <MemoComp name={this.state.name} />
                {/* <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/> */}
            </div>
        )
    }
}

export default ParentComp
