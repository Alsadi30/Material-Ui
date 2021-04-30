import React from 'react'
import {useState} from 'react'
import MakeStyles from './components/makeStyles'

function App() {

const [state,setbool] = useState(true)
const handleClick = () =>{
  console.log('I am Clicked')
  return setbool(!state)
}
const bool = state

  return (
    <div className="App">
      <MakeStyles bool={bool} handleClick = {handleClick}/>
    </div>
  );
}

export default App;
