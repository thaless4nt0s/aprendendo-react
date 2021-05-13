import React, { Component } from 'react'

const WithCounter = (OriginalComponent, incrementNumber) =>{
    class WithCounter extends Component {
        constructor(props) {
            super(props)
            this.state = {
                count: 0
            }
            this.incrementCount = this.incrementCount.bind(this)
        }
        
        incrementCount(){
            this.setState(prevState =>{
                return{
                    count: prevState.count + incrementNumber
                }
            })
        }

        render() {
            return (
                <OriginalComponent
                    count={this.state.count} incrementCount={this.incrementCount}
                    {...this.props}
                />
            )
        }
    }
    return WithCounter
}
export default WithCounter 