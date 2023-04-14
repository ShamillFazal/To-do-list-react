import './index.css';
import { useState, useRef } from 'react';

function Input () {
const [text, setText] = useState("");
const inputRef = useRef(null);

function enterText(event){
    setText(inputRef.current.value);
}


    return (
    <div>
        <input type = "text" ref={inputRef}/>
        <button onClick = {enterText}>Click Me</button>
    </div>
    )

}

export default Input; 
