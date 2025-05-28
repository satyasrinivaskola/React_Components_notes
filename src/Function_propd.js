import React from 'react'

const Greet=(props)=>{
  return(
    <div><h1>Good Morning {props.name}  from {props.village}</h1></div>
  )
}
export default Greet 
/*this keyword is not necessary to passing props in functional com and props are immutable */ 