import { useState } from 'react';
import logo from './goku.jpeg';

function App() {
  const [width , setWidth] = useState(100);
  const [height , setHeight] = useState(300);
  const [size , setSize] = useState({w : 100 , h : 120});
 
  const getWidthEventHandler = (e) => {
    setWidth(e.target.value);
    console.log(e.target.value);
  }

  const getHeightEventHandler = (e) => {
    setHeight(e.target.value);
    console.log(e.target.value);
  }

  const buttonEventHandler = (e) => {
    e.preventDefault();
    setSize({w : width , h : height})
    console.log(size.w , size.h);
  }

  return (
    <div className="App">
      <img src={logo} style={{width : `${size.w}px` , height : `${size.h}px`}}></img>
      <input onChange={getWidthEventHandler} type="text"></input>
      <input onChange={getHeightEventHandler} type="text"></input>
      <button onClick={buttonEventHandler}> Change Size </button>
    </div>
  );
}

export default App;
