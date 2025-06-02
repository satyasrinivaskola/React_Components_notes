import React from 'react'
class User_Data_Regular extends React.Component{

    
    render(){
        console.log("Regular Component")
        return(
            <div >Regular Component {this.props.message} </div>
        )
    }
}

export default User_Data_Regular