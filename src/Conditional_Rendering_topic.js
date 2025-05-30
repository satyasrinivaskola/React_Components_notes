import React from 'react'
class User extends React.Component{
    constructor(){
        super()
        {
            this.state={
                IsLoggedin:false
            }
        }
    }
    render ()
    {
 return(
        this.state.IsLoggedin &&
       
        <div>User777</div>
        )

}
}
export default User
  /* if else rendering
  render()
  
 {
        if(this.state.IsLoggedin)
        {
            return<div>Welcome Vishwas</div>
        
        }
        else
        {
            return<div>Welcome Guest</div>
        
        }
    } */
   /* updating message based on condition and render updated message
    render ()
    {
    let message
    {
        if(this.state.IsLoggedin){
            message="Vishwas"
        }
        else
        {
            message="Satya"
        }
        return(
            <div>{message}</div>
        )
    }
} */

/* Ternary operator
  render ()
    {
    return(
        this.state.IsLoggedin?
        <div>User1</div>
        : <div>User2</div>
    )
}*/

/* using short circuit operator
render ()
    {
 return(
        this.state.IsLoggedin &&
       
        <div>User777</div>
        )

} */