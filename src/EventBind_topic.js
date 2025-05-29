import React from 'react'
class EventHandler extends React.Component{
    constructor(){
        super()
        this.state={
            message:"Hello EventHandler"
        }
        this.clickFunction=this.clickFunction.bind(this)
    }
    /* first approach updating message using setstate function
clickfunction=()=>{
    this.setState({
        message:"Hello clickfunction"
    })
        //<button onClick={()=>this.clickfunction()} >click </button>
}
    */
/* second Approach
Declaring as method and calling onclick event as arrow function without using bind keyword
clickfunction(){
    this.setState({message:"Hello bind"})
}

    <button onClick={()=>this.clickfunction()} >click </button>
*/
/* 3rd Approach
updating state through setstate as a method and calling onclick using bind and this keyword in render method
clickfunction(){
    this.setState({message:"Hello bind"})
}
<button onClick={this.clickFunction.bind(this)} >click </button>    
*/
/*4th Approach update state through setstate method and declare
this.clickFunction=this.clickFunction.bind(this) in constructor
  constructor(){
        super()
        this.state={
            message:"Hello EventHandler"
        }
        this.clickFunction=this.clickFunction.bind(this)
    }
<button onClick={this.clickFunction} >click </button>
*/
clickFunction(){
    this.setState({message:"Hello with bind in constructor"})
}
    render(){
        return(
            <div>
            <p>{this.state.message}</p>
   
           
            <button onClick={this.clickFunction} >click </button>
            </div>

        )
    }
} 

export default EventHandler
