import { useState } from "react";
import "./App.css";
import TextInput from "./Components/TextInput";
import IncomingText from "./Components/IncomingText";
import ToolBar from "./Components/ToolBar";

function App() {
  const [highlightedText, setHighlightedText] = useState("")
  const [chatgptResponse, setChatgptResponse] = useState("")

  return (
    <div>
      <div className="flex flex-row gap-x-8">
        <TextInput onData={setHighlightedText}/>
        <IncomingText text={chatgptResponse}/>
      </div>
      <ToolBar onData={setChatgptResponse} highlighted={highlightedText}/>
    </div>
  );
}

export default App;
