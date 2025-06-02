import React,{Component,Pure} from 'react'
import User_Data_Regular from './Regular_component_Pure'
import User_Data_Render from './Pure_component'
class User_Data_Parent extends React.Component{
    constructor(props){
        super(props)
        this.state=({
            message:"Satya Kola"
        })
    }
    componentDidMount(){
        setInterval(()=>
        this.setState({
            message:"SatyaKola"
        }),2000)
        
    }
    render(){
        console.log("Parent Component")
        return(
            <div>
            <User_Data_Regular message={this.state.message}/>
            <User_Data_Render message={this.state.message}/>
            </div>
        )
        
    }
}

export default User_Data_Parent