import React from 'react'
class Count extends React.Component{

    constructor(){
        super()
        {
            this.state={
                count:1
            }
        }

    }

    increment=()=>{
       //this.state.count=this.state.count+1
       //if we update state directly it's not rerending and not updating in UI,So always update state value using setState 

       this.setState({
        count:this.state.count+1
       },()=>{console.log('callback value' , this.state.count)})//Callback function to sync the count value
        console.log(this.state.count)//Mismatching value from UI to console,triggering asynchronous 
        //in console.log we can use alert or any events to check difference between count
    }
   
    render(){
        return(
            <button onClick={()=>this.increment()}>Count{this.state.count}</button>
            

        )
    }
} 

export default Count