import React, { Component } from 'react'

class RefsDemo2 extends Component {
    constructor(props) {
        super(props)
    
        this.refObj = React.createRef()
    }
    
    componentDidMount(){
        this.refObj.current.focus()
    }

    render() {
        return (
            <div>
                <label>asd</label>
                <input type="text"/>
                <label>324</label>
                <input type="text" ref={this.refObj}/>
            </div>
        )
    }
}

export default RefsDemo2
