import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
    // const [bool, setBool] = useState(false)
    const [btnColor, setBtnColor] = useState('red')
    const [btnDisabled, setBtnDisabled] = useState(false);
    const newBtnColor = btnColor === 'red' ? 'blue' : 'red'

  return (
    <div className="App">
    <button disabled={btnDisabled}   className={newBtnColor} onClick={()=>setBtnColor(newBtnColor)}>{`Change to ${btnColor}`}</button>
        <input type="checkbox" onChange={(event)=> setBtnDisabled(event.target.checked)} aria-checked={btnDisabled} id={'buttonCheck'}/>
            <label htmlFor="buttonCheck"> Toggle Button</label>

    </div>
  );
}

export default App;
