# React import statemt:(import React from 'react' in reactJS)
import React from 'react' statement is used to import the React library into your JavaScript file. React provides functionalities for creating and managing components in a React application.
# React components Note
React components: It is reusable parts in ReactJS
React components are two types:

1.Functional components: It is JavaScript function components and simpler syntax 
			 ,does not require class and render () method,
			and it can manage state using Hooks(useEffect and useState)


Ex:
import React from 'react'
const FormData = () =>{
    return(
        <div>
        I am a Functional component
        </div>
    )

}

2.Class Component: It is defined using JavaScript ES6 classes,
		   It extends React. Component  and require render() method to return JSX

# React.Component : This allow component to use state and lifecycle methods

Ex:
import React from 'react'
class Clscomponent extends React.Component{
    render()
    {
        return(
         
                <div> class component</div>
           
        )
    }
    
}
export default Clscomponent


***Root VS Child Vs Parent component

Root component: Top most component in react app and it wrap everything inside,
	        Provide clear and clean code and make state management easier
Parent component: A component one more child component inside it.
Child Component: A nested component inside parent component

***Fragment:
Fragment tag used to Wrap multiple elements without adding extra DOM node.

Faced challenges:
>Component name should starts with capital letter.
>Remember React is case sensitive language ,i have faced issue for
1. used 'r' in root instead of 'R'
2. saved file as .JS instead of .js
3.defined function component as function instead of variable(const/var/let)
>called child component in root component directly without using fragment or div tag


JSX:
Without JSX also we can create reactJs components ,But using JSX it become easier

syntax:
return(
    React.createElement("str",null,"children content")
)

str-tag name
null:attribute ,class attribute in JSX will error ,
since it is Js attribute in JSX use ClassName instead of class to avoid throughing error
Children content:content in web page

ex:

import React from 'react'
/* Function component */
const JSX_topic = () =>{
    return(
       React.createElement("div",{id:"idntifier"}, React.createElement("h1",null,"Hello JSX"))
        
       
    )

}
export default JSX_topic

Props:

props are immutable and these are properties to pass from oe component to another com
they allow components to be dynamic and reusable by sending different values as inputs.

ex for class component:

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

ex for funaction components:
import React from 'react'

const Greet=(props)=>{
  return(
    <div><h1>Good Morning {props.name}  from {props.village}</h1></div>
  )
}
export default Greet 
/*this keyword is not necessary to passing props in functional com and props are immutable */ 

we have to pass props value in root component like this:

Ex for root component:

 import Greet from './Function_propd.js'
import Ranks_class from './class_props.js'
function App() {
  return (   
    <>
      <h1>hello</h1>
<FormData/>
<Clscomponent />
<Greet name="satya kola" village="KKT" />
<Greet name="Manu kola" village="PTP"/>
<Ranks_class rank="55" />
</>

  );
  
}

export default App;

# setstate and call back:
we are using setstae to update state ,
  if we have updated state directly without setstate updated data not updating in user page,
  Beacause page not rerendering.if we use setstate it will rerender the page once anychanges in state.
  Asynchonous problem(console data and page data not matching) using state value after setstate ,So use call back(call second argument in setstate as call back function) to avoid this asynchonous problem

  ex:

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
       //this.state.count=this.state.count+1 //updating state directly
       this.setState({
        count:this.state.count+1
       },()=>{alert(this.state.count)}) //Calling count value as call back function synchrounising with UI and condole value,Since callback function used

       alert(this.state.count)//in alert getting previous value,Since calling count after setstate
      // without callback function and triggering synchronous
        
    }
   
    render(){
        return(
            <button onClick={()=>this.increment()}>Count{this.state.count}</button>
            

        )
    }
} 

export default Count

***Destructring props /state:

destructing props/state helps to call props directly without using props.paramaetername/this.props.parametername
assign parameters as a props object and call parameter directly using curly braces("{}")
it used to simplify the code structure and clear and clean code visiblity

syntax for class component:

const{propsname1,propsname2}=this.props
ex:
const{name,heroname}=this.props
<div>name-{name} and heroname-{heroname}//using destructring
<div>name-{this.props.name} and heroname-{this.props.heroname}//without using destructring

syntax for functional component:

const{propsname1,propsname2}=props

ex:
const{name,heroname}=props
<div>name-{name} and heroname-{heroname}//using destructring
<div>name-{props.name} and heroname-{props.heroname}//without using destructring

***Event Handlers :
When ever user interacts with UI  need to updated UI respectly.
Ex:Click on button need to change or update state data

we can handle events with 4 approches as below.
1.update props data using setstate as a function and call event as this.functionname.
ex:

import React from 'react'
class EventHandler extends React.Component{
    constructor(){
        super()
        this.state={
            message:"Hello EventHandler"
        }
        //Declaring state message
    }
clickfunction=()=>{
    this.setState({
        message:"Hello clickfunction"
    })
    //updating message using setstate as a arrow function
}
    render(){
        return(
            <div>
            <p>{this.state.message}</p>
            <button onClick={()=>this.clickfunction()} >click </button>
            //calling event as this.functionname as arrow function witout bind
            </div>

        )
    }
} 

export default EventHandler

2.Declaring as method and calling onclick event as arrow function without using bind keyword
clickfunction(){
    this.setState({message:"Hello bind"})
}

    <button onClick={()=>this.clickfunction()} >click </button>

  ex:
  import React from 'react'
class EventHandler extends React.Component{
    constructor(){
        super()
        this.state={
            message:"Hello EventHandler"
        }
        //Declaring state message
    }
clickfunction(){
    this.setState({message:"Hello bind"})
}
    //updating message using setstate as a method
}
    render(){
        return(
            <div>
            <p>{this.state.message}</p>
            <button onClick={()=>this.clickfunction()} >click </button>
            //calling event as this.functionname as arrow function witout bind
            </div>

        )
    }
} 

export default EventHandler

  3.updating state through setstate as a method and calling onclick using bind and this keyword in render method
clickfunction(){
    this.setState({message:"Hello bind"})
  
}
<button onClick={this.clickFunction.bind(this)} >click </button>

ex:


import React from 'react'
class EventHandler extends React.Component{
    constructor(){
        super()
        this.state={
            message:"Hello EventHandler"
        }
        //Declaring state message
    }
clickfunction(){
    this.setState({message:"Hello bind"})
  
}
    //updating message using setstate as a Method
}
    render(){
        return(
            <div>
            <p>{this.state.message}</p>
           <button onClick={this.clickFunction.bind(this)} >click </button>
            //calling event as this.functionname as arrow function witout bind
            </div>

        )
    }
} 

export default EventHandler

4.Approach update state through setstate method and declare
this.clickFunction=this.clickFunction.bind(this) in constructor
  constructor(){
        super()
        this.state={
            message:"Hello EventHandler"
        }
        this.clickFunction=this.clickFunction.bind(this)
    }
<button onClick={this.clickFunction} >click </button>

ex:
import React from 'react'
class EventHandler extends React.Component{
    constructor(){
        super()
        this.state={
            message:"Hello EventHandler"
        }
        //Declaring state message
        this.clickFunction=this.clickFunction.bind(this)
        //Declaring this.bind in constructor
    }
clickfunction(){
    this.setState({message:"Hello bind"})
  
}
    //updating message using setstate as a Method
}
    render(){
        return(
            <div>
            <p>{this.state.message}</p>
          <button onClick={this.clickFunction} >click </button>
            //calling event as this.functionname 
            </div>

        )
    }
}
export default EventHandler


*** method as a props(parent to child):
If we have to pass properties from parent to child need to pass method as a property from child to parent.

ex:

//Parent component
//Methods as a props(To pass props from parent to child-15)

import React from 'react'
import Childcomponent from'./Methodasprops_Child.js'
class ParentComponent extends React.Component {
constructor(){
    super()
    this.state={
        Name:"Srinivas Kola"
    }
    this.Greet=this.Greet.bind(this)
}
Greet(){
    alert(`Hello ${this.state.Name}`)
}
    render(){
    return(
        <>
        <Childcomponent GreetHandler ={this.Greet}/>
        </>
    )
    }

}
export default ParentComponent

child component as a class component:

import React, { Component } from 'react'
 class Childcomponent extends Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
 <button onClick={this.props.GreetHandler}>Click Here</button>
        )
    }
 }
   
export default Childcomponent

child component as class component:
import React from 'react'
 const Childcomponent=(props)=>{

    return(
        <button onClick={props.GreetHandler}>Click Here</button>
    )

}
export default Childcomponent

//Here we are passing greet method as GreetHandler property from parent to child component.

Facing mistakes:
1.declared state with colon instead of equal operator 
2.Onclick event should be camalcase

*** Conditional Rendering:To render elements in page based on particular conditions in 4 Approaches.
1.If/Else COndition : Given condition satisfies render if conditional element other than render else elemennt.

ex:

import React from 'react'
class User extends React.Component{
    constructor(){
        super()
        {
            this.state={
                IsLoggedin:true
            }
        }
    }
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
    }

}

export default User
//if Islogged is true Welcome VIshawas will print

2.Element Variable:
 condition updating the variable and redering respectively.
 //updating message based on condition and render updated message
 ex:
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
}
}
export default User

3.Ternary condition:render based on ternary condition
ex:
import React from 'react'
class User extends React.Component{
    constructor(){
        super()
        {
            this.state={
                IsLoggedin:true
            }
        }
    }
    render ()
    {
    return(
        this.state.IsLoggedin?
        <div>User1</div>
        : <div>User2</div>
    )
}
}
export default User

4.short circuit condition:To render element when condition is satisfied or else nothing will be render.
ex:
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
Errors:
starting curly braces in same line with render or super methods (not error but coming as red color in code)

***Lists and Keys:
Key is special string attribute you need to include when creating lists of elements.
Key gives a element a stable identity
Key help React to identify which items have changed,are added, or are removed
Helps in efficient update in user interface

# Css styles in React

We have 4 a approaches to style React components.
1.CSS stylesheet :Give all styles based on selector in single file
JSX(JS XML) is extention of JS ,In Js class is reserved keyword so causes conflicts ,To avoid this issue React 
introduced className ,components will work like as Class in JS.
ex: using className
# style.css
.success{
   color:aqua
}
# CSS_styles_topic.js
import React from 'react'
import './styles.css'
class Test_css extends React.Component{
    render()
    {
        return(
            <h1 className='success'>Hello CSS3</h1>
        )
        
    }
}
export default  Test_css

2.Inline styling :give the styles in same Js file
ex:
import React from 'react'
import './styles.css'

class Test_css extends React.Component{
   

    render()
    {
        return(
            <h1 style={{
   color:'blue'}}>Hello CSS3</h1>
        )
        
    }
}
export default  Test_css
//assing all styles to one variable and call it as class
ex:
import React from 'react'
import './styles.css'
const success={
   color:'orange'}
class Test_css extends React.Component{
   

    render()
    {
        return(
    <h1 style={success}>Hello CSS3</h1>
        ) 
    }
}
export default  Test_css

3.CSS Modules stylesheet : Give all styles based on selector in single file ,import styles as per requirement 
Css Module css used to avoid use same classname in other child components also in accidently.
Ex:
import React from 'react'


class Test_stylesheet extends React.Component{
   

    render()
    {
        return(
       
   <>
    <h1 className='success'>Hello CSS stylesheet</h1>
    <h1 className={styles.Error}>Hello CSS module</h1>
    </>
        )
        
    }
}
export default  Test_stylesheet
//Here getting  styles are undefined error for className={styles.Error} but css styles applied for className='success' ,module.CSS prevents use same class name in different components by mistake
//.CSS class
.success{
   color:orange
}
//.module.css class
.Error{
   color:green
}

4.CSS in JS Libraries

