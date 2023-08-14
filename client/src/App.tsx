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
  console.log("this is true? ", highlightedText)

  return (
    <div className="flex justify-center items-center">
    <div className="2xl:px-64 px-32 text-center w-2/3">
      <div className="border-b border-zinc-200 block mb-6 pb-3 text-left">
        <div className="text-zinc-500 text-lg">Title</div>
        <div className="text-white font-semibold text-2xl outline-none" contentEditable suppressContentEditableWarning>My Awesome Essay</div>
      </div>
      <div className="flex flex-col block h-[60vh] mb-2">
        <TextInput onData={setHighlightedText} onContentChange={setInputContent} setHighlight={setIsHighlightingText} isHighlighted={isHighlightingText}>
          <div className="bg-zinc-900 h-fit my-4 mx-3 p-3 rounded justify-self-end transition-all opacity-0 delay-200 duration-700 opacity-100">
          <IncomingText chatgptResponse={chatgptResponse} prompt={highlightedText} isHighlightingText={isHighlightingText}/>
          <ToolBar onData={setChatgptResponse} highlighted={highlightedText}/>
          </div>
        </TextInput>
        
      </div>
      
      <footer className="border-t border-zinc-500 text-zinc-500 pt-3 text-left">
        <span>{(inputContent !== '' ? inputContent.trim().split(' ').length : 0)} words - </span>
        <span>{inputContent.length} characters - </span>
        <span>{Math.round(inputContent.length / 500)} pages </span>
      </footer>
    </div>
    </div>
    
  );
}

export default App;
