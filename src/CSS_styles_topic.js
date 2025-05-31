import React from 'react'
import './styles.css'
import styles from'./styles.module.css'
const success={
   color:'orange'}
class Test_css extends React.Component{
   

    render()
    {
        return(
           /* <h1 style={{
   color:'blue'}}>Hello CSS3</h1>*/
   <>
    <h1 className={styles.Error}>Hello CSS stylesheet1</h1>
    <h1 className='success'>Hello CSS module1</h1>
    </>
        )
        
    }
}
export default  Test_css

//here we not able to access styles.Error class ,since it is defined in module.css file,
//So we not able to access module.css styles in child Component.