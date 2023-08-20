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
  const [caretLocation, setCaretLocation] = useState(0);
  // console.log("this is true? ", isHighlightingText)

  return (
    <div className="flex space-x-3 items-center justify-center">
<<<<<<< Updated upstream
      <div className="2xl:px-48 px-24 w-3/4">
        <div className="text-center w-full">
=======
      <div className="2xl:px-48 px-24 w-2/3">
        <div className="text-center">
>>>>>>> Stashed changes
          <div className="border-b border-zinc-200 block mb-6 pb-3 text-left">
            <div className="text-zinc-500 text-lg">Title</div>
            <div className="text-white font-semibold text-2xl outline-none" contentEditable suppressContentEditableWarning>My Awesome Essay</div>
          </div>
          <div className="flex flex-col block h-[60vh] mb-2">
            <TextInput
              onData={setHighlightedText}
              onContentChange={setInputContent}
              setHighlight={setIsHighlightingText}
              isHighlighted={isHighlightingText}
              setCaretLocation={setCaretLocation}
            >
              <div
                className="bg-[#1B1B1B] h-fit my-4 mx-3 p-3 rounded justify-self-end transition-all opacity-0 delay-200 duration-700 opacity-100 card-stretch"
              >
                <IncomingText
                  chatgptResponse={chatgptResponse}
                  prompt={highlightedText}
                  highlightedText={highlightedText}
                  setHighlightedText={setHighlightedText}
                  setIsHighlightingText={setIsHighlightingText}
                  inputContent={inputContent} 
                  setInputContent={setInputContent}
                  caretLocation={caretLocation}
                />
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
      {/* <div className="h-screen bg-neutral-700/20 grow-0 w-96">
          about creators of the thing
      </div> */}
    </div>
  );
}

export default App;
