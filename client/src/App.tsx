import { useState } from "react";
import "./App.css";
import TextInput from "./Components/TextInput";
import IncomingText from "./Components/IncomingText";
import ToolBar from "./Components/ToolBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="flex flex-row gap-x-8">
        <TextInput></TextInput>
        <IncomingText></IncomingText>
      </div>
      <ToolBar></ToolBar>
    </div>
  );
}

export default App;
