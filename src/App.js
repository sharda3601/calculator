import { useState } from 'react';
import './App.css';
import './style.css';
function App() {
  const[value, setVal] = useState('');
  return (
    <div className="App">
     <div className='container'>
      <div className='container1'>
        <input type='text' value={value}></input>
      </div>
      <div className='container2'>
      <div className='row'>
          <input type='text' value="AC" onClick={()=>setVal('')}></input>
          <input type='text' value="%"></input>
          <input type='text' value="x" onClick={()=>value ? setVal(value.slice(0, -1)) : ''}></input>
          <input type='text' value="/" onClick={(e)=>setVal(value + e.target.value)}></input>
        <div className='row'>
          <input type='text' value="7" onClick={(e)=>setVal(value + e.target.value)}></input>
          <input type='text' value="8" onClick={(e)=>setVal(value + e.target.value)}></input>
          <input type='text' value="9" onClick={(e)=>setVal(value + e.target.value)}></input>
          <input type='text' value="*" onClick={(e)=>setVal(value + e.target.value)}></input>
        </div>
        <div className='row'>
          <input type='text' value="4" onClick={(e)=>setVal(value + e.target.value)}></input>
          <input type='text' value="5" onClick={(e)=>setVal(value + e.target.value)}></input>
          <input type='text' value="6" onClick={(e)=>setVal(value + e.target.value)}></input>
          <input type='text' value="-" onClick={(e)=>setVal(value + e.target.value)}></input>
        </div>
        <div className='row'>
          <input type='text' value="1" onClick={(e)=>setVal(value + e.target.value)}></input>
          <input type='text' value="2" onClick={(e)=>setVal(value + e.target.value)}></input>
          <input type='text' value="3" onClick={(e)=>setVal(value + e.target.value)}></input>
          <input type='text' value="+" onClick={(e)=>setVal(value + e.target.value)}></input>
        </div>
        <div className='row'>
          <input type='text' value="0" onClick={(e)=>setVal(value + e.target.value)}></input>
          <input type='text' value="." onClick={(e)=>setVal(value + e.target.value)}></input>
          <input type='text' value="%" onClick={(e)=>setVal(value + e.target.value)}></input>
          <input type='text' value="=" onClick={()=>setVal(String(eval(value)))}></input>
        </div>
      </div>
     </div>
    </div>
    </div>
  );
}

export default App;
