//Methods as a props(To pass props from parent to child-15)

import React from 'react'
import Childcomponent from'./Methodasprops_Child.js'
class ParentComponent extends React.Component {
constructor(){
    super()
    this.state={
        Name:"Srinivas Kola"
    }
    this.Greet=this.Greet.bind(this)
}
Greet(){
    alert(`Hello ${this.state.Name}`)
}
    render(){
    return(
        <>
        <Childcomponent GreetHandler ={this.Greet}/>
        </>
    )
    }

}
export default ParentComponent