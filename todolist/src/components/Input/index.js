import './index.css';
import { useState, useRef } from 'react';
import addToList from '../App/App';

function Input () {
    
    return (
    <div>
        <input onChange= {enterText} type = "text" ref={inputRef}/>
        <button onClick = {addToList}>Click Me</button>
    </div>
    )

}

export default Input; 
