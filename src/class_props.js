import React from 'react'

class Ranks_class extends React.Component{
    render(props){
        return(
            <div>Divya Rank is {this.props.rank}</div>
        )
    }
}
export default Ranks_class

/*this keyword is necessary to passing props in class and props are immutable */ 