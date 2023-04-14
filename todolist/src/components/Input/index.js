import './index.css';
import { useRef } from 'react';

function Input (props) {
    const inputRef = useRef(null);
    function enterText(event) {
        const text = inputRef.current.value;
        props.onEnterText(text);
        inputRef.current.value="";
    }
    return (
    <div>
        <input type = "text" ref={inputRef}/>
        <button className='addButton' onClick = {enterText}>Click Me</button>
    </div>
    )

}

export default Input; 
