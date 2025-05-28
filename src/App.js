
import './App.css';
import FormData from './Form.js'
import Clscomponent from './ClassComponent.js'
function App() {
  return (   
  
/*Here we have used fragment tag,
fragment tag used to add multiple elements without adding extra DOM node,
HTML elements since we can't return directly to dom */
    <>
   
      <h1>hello</h1>
<FormData/>
<Clscomponent />
</>

  );
  
}

export default App;

