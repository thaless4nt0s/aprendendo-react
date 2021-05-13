import React, { Component } from 'react'

const WithCounter = OriginalComponent =>{
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
                    count: prevState.count +1
                }
            })
        }

        render() {
            return (
                <OriginalComponent count={this.state.count} incrementCount={this.incrementCount}/>
            )
        }
    }
    return WithCounter
}
export default WithCounter 