import "./App.css";
import { useState } from "react";
import Input from "../Input";
import List from "../List";

function App() {
  const [listState, setListState] = useState([]);

  function handleText(text){
    setListState([...listState, text]);
  }
  function deleteItem(index){
    setListState([listState.slice(0,index), listState.slice(index+1)]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>What I need to do...</p>
      </header>
<div className="Main">
      <main>
        <Input onEnterText={handleText} />
        <List listState={listState} deleteItem={deleteItem} setListState={setListState}/>
      </main>
    </div>
    </div>
  );
}

export default App;
