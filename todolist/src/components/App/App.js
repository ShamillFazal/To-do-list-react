import "./App.css";
import { useState } from "react";
import Input from "../Input";
import List from "../List";

function App() {
  const [listState, setListState] = useState([]);
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  function addToList(text){
    setListState([...listState, text]);
  }
  
  function handleText(event){
      setText(inputRef.current.value);
      console.log(text);
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <p>Here is our app.</p>
      </header>
      <main>
        <Input addToList={addToList} />
        <List />
      </main>
    </div>
  );
}

export default App;
