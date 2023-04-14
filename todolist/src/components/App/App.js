import "./App.css";
import { useState } from "react";
import Input from "../Input";
import List from "../List";

function App() {
  const [listState, setListState] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Here is our app.</p>
      </header>
      <main>
        <Input />
        <List />
      </main>
    </div>
  );
}

export default App;
