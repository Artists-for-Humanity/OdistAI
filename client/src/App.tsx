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

  const wordCount = (div: HTMLDivElement) => {
    if (!div) return 0;
    return div.innerText
      .trim()
      .split(/\W+/)
      .length;
  }

  return (
    <div className="flex space-x-3 items-center justify-center w-full min-h-screen bg-matte-black-light">
      <div className="2xl:px-48 px-24 w-3/4 flex flex-row">
        <div className="text-center w-full">
          <div className="border-b-2 text-zinc-500 block mb-8 pb-3 text-left">
            <div className="text-zinc-500 text-lg pb-3">Title</div>
            <div className="text-white font-semibold text-xl outline-none pb-3" contentEditable suppressContentEditableWarning>My Awesome Essay</div>
          </div>
          <div className="flex flex-col block h-[60vh] mb-2 bg-matte-black-light">
            <TextInput
              onData={setHighlightedText}
              onContentChange={setInputContent}
              setHighlight={setIsHighlightingText}
              isHighlighted={isHighlightingText}
              setCaretLocation={setCaretLocation}
            >
              <div
                className="bg-[#1B1B1B] h-fit p-3 rounded justify-self-end transition-all opacity-0 delay-200 duration-700 opacity-100 card-stretch "
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
                <ToolBar onData={setChatgptResponse} highlighted={highlightedText} />
              </div>
            </TextInput>
          </div>

          <footer className="border-t-2 text-zinc-500 pt-3 text-left text-xs">
            {/* {inputContent !== "" ? inputContent.trim().split(" ").length : 0}{" "}
              words -{" "} */}
            <span>{wordCount(document.getElementById('essay-content') as HTMLDivElement)} words - </span>
            <span>{inputContent.length} characters - </span>
            <span>{Math.round(inputContent.length / 500)} pages </span>
          </footer>
        </div>
        <div className="flex flex-col w-2/4 gap-5">
          <h3>About The Project</h3>
          <div className="flex flex-row text-center align-text-bottom gap-5 h-48">
            <div className="w-1/2 items-end bg-zinc-900"><span>Phaedra</span>
            </div>
            <div className="w-1/2 bg-zinc-900">Gordan</div>
          </div>
          <div className="flex flex-row text-center gap-5 h-48">
            <div className="w-1/2  bg-zinc-900">Youssef</div>
            <div className="w-1/2 bg-zinc-900">Luke</div>
          </div>
        </div>
      </div>
      {/* <div className="h-screen bg-neutral-700/20 grow-0 w-96">
          about creators of the thing
      </div> */}
    </div>
  );
}

export default App;
