import React, { Component, Fragment } from "react"

class Fruits extends Component{
    constructor(){
        super()
        this.state={
            frutas: ['Maça','Laranja','Abacaxi','Acerola','Manga','Ameixa']
        }
    }

    imprimir(item){
        document.write(item+"<br>")
    }

    render(){
        return(
            <Fragment>
                {this.state.frutas.forEach(this.imprimir)}
            </Fragment>
        )
    }
}

export default Fruits