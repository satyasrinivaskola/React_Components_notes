import React from 'react'
class Welcome extends React.Component{

    constructor(){
        super()
        {
            this.state={
                message:"Welcome to ReactWorld"
            }
        }

    }
    mesagechange=()=>{
        this.setState({
            message:"Thanks for subsribing"
        })
    }

    render(){
        return(
            <div>
<h1>{this.state.message}</h1>
<button onClick={()=> this.mesagechange()}>subscribe</button>
</div>
        )
    }
}
export default Welcome

/* state used to change with in component */
