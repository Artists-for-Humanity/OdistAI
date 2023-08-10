import { useState } from "react";
import "./App.css";
import TextInput from "./Components/TextInput";
import IncomingText from "./Components/IncomingText";
import ToolBar from "./Components/ToolBar";

function App() {
  const [highlightedText, setHighlightedText] = useState("")
  const [chatgptResponse, setChatgptResponse] = useState("")
  const [inputContent, setInputContent] = useState("");
  const [isHighlightingText, setIsHighlightingText] = useState(false);

  return (
    <div className="2xl:px-64 px-32 text-center w-full">
      <div className="border-b border-zinc-200 block mb-6 pb-3 text-left">
        <div className="text-zinc-500 text-lg">Title</div>
        <div className="text-white font-semibold text-2xl outline-none" contentEditable suppressContentEditableWarning>My Awesome Essay</div>
      </div>
      <div className="block h-[60vh] mb-2">
        <TextInput onData={setHighlightedText} onContentChange={setInputContent} setHighlight={setIsHighlightingText} isHighlighted={isHighlightingText}>
          <IncomingText text={chatgptResponse} prompt={highlightedText}/>
        </TextInput>
      </div>
      <ToolBar onData={setChatgptResponse} highlighted={highlightedText}/>
      <footer className="border-t border-zinc-500 text-zinc-500 pt-3 text-left">
        <span>{(inputContent !== '' ? inputContent.trim().split(' ').length : 0)} words, </span>
        <span>{inputContent.length} characters</span>
      </footer>
    </div>
    
  );
}

export default App;
