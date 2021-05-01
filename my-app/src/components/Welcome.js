import React, {Component} from 'react'

class Welcome extends Component{
    render(props){
        return (
            <h1>
                Class {this.props.name} Component {this.props.superHero}
            </h1>
        )
    }


}
export default Welcome
