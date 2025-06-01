import React from 'react'
class UserData extends React.Component{
constructor(props){
    super(props)
    this.state=
    {
UserName:'',
Email:'',
Comments:'',
Topic:''

    }
}
UserNameHandler=(event)=>{
    this.setState({
      UserName: event.target.value
    })
}
EmailHandler=(event)=>{
    this.setState({
      Email: event.target.value
    })
}
CommentHandler=(event)=>{
    this.setState({
      Comments: event.target.value
    })
}
TopicHandler=(event)=>{
    this.setState({
      Topic: event.target.value
    })
}
    datasubmit=()=>{
        alert(`HEllo ,${this.state.UserName}${this.state.Comments} ${this.state.Email} ${this.state.TopicHandler}`)
    }

    render(){
        const{UserName,Email,Comments,Topic}=this.state
        return(
            <div>
                <form onSubmit={this.datasubmit}>
                    <div>
                        <label>UserName:</label>
                        <input type='text' value={UserName} onChange={this.UserNameHandler}></input>
                    </div>
                     <div>
                        <label>Email:</label>
                        <input type='text' value={Email} onChange={this.EmailHandler}></input>
                    </div>
                    <div>
                        <label>Comments:</label>
                        <input type='textarea' value={Comments} onChange={this.CommentHandler}></input>
                    </div>
                     <div>
                        <label value={Topic} onChange={this.TopicHandler}>Topic:</label>
                        <select value={this.Topic}>
                        <option>HTML</option>
                        <option>CSS</option>
                        <option>React</option>
                        </select>
                        
                    </div>
                    <button type="Submit" >Submit</button>
                </form>
                
            </div>
        )
    }
}
export default UserData