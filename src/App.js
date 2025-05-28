
import './App.css';
import FormData from './Form.js'
import Clscomponent from './ClassComponent.js'
import JSX_topic from './JSX_topic.js'
import Greet from './Function_propd.js'
import Ranks_class from './class_props.js'
import Welcome from './class_state.js'
function App() {
  return (   
  
/*Here we have used fragment tag,
fragment tag used to add multiple elements without adding extra DOM node,
HTML elements since we can't return directly to dom */
    <>
   
      <h1>hello</h1>
<FormData/>
<Clscomponent />
<Greet name="satya kola" village="KKT" />
<Greet name="Manu kola" village="PTP"/>
<Ranks_class rank="55" />
<JSX_topic/>
<Welcome/>
</>

  );
  
}

export default App;

