import React, { PureComponent } from 'react'
class User_Data_Render extends PureComponent{
    render(){
                 console.log("Pure Component")

        return(
            <div>Pure Component {this.props.message}</div>
        )
    }
}

export default User_Data_Render