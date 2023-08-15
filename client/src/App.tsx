import { useState } from "react";
import "./App.css";
import TextInput from "./Components/TextInput";
import IncomingText from "./Components/IncomingText";
import ToolBar from "./Components/ToolBar";

function App() {
  const [highlightedText, setHighlightedText] = useState("");
  const [chatgptResponse, setChatgptResponse] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [isHighlightingText, setIsHighlightingText] = useState(false);
  console.log("this is true? ", highlightedText);

  return (
    <div className="bg-black h-screen flex justify-center">
      <div className="bg-matte-black-light w-3/4 flex items-center">
        <div className="2xl:px-[216px] px-32 w-full">
          <div className="border-b border-gray flex flex-col gap-y-[12px] mb-12 pb-3 text-left">
            <div className="text-[16px] font-medium text-gray">Title</div>
            <div
              className="font-bold text-[18px] outline-none"
              contentEditable
              suppressContentEditableWarning
            >
              My Awesome Essay
            </div>
          </div>
          <div className="flex flex-col h-[65vh] mb-2 overflow-auto">
            {/* <button className="transition duration-300 ease-in-out ...">
              Button B
            </button> */}
            <TextInput
              onData={setHighlightedText}
              onContentChange={setInputContent}
              setHighlight={setIsHighlightingText}
              isHighlighted={isHighlightingText}
            >
              <div
                className={`bg-matte-black h-fit my-4 mx-0 flex flex-col duration-1000 ${
                  isHighlightingText ? "opacity-100" : "opacity-0"
                }`}
              >
                <IncomingText
                  chatgptResponse={chatgptResponse}
                  prompt={highlightedText}
                  isHighlightingText={isHighlightingText}
                />
                <div className="flex justify-self-end w-full">
                  <ToolBar
                    onData={setChatgptResponse}
                    highlighted={highlightedText}
                  />
                </div>
              </div>
            </TextInput>
          </div>

          <footer className="border-t border-zinc-500 text-zinc-500 pt-3 text-left text-xs">
            <span>
              {inputContent !== "" ? inputContent.trim().split(" ").length : 0}{" "}
              words -{" "}
            </span>
            <span>{inputContent.length} characters - </span>
            <span>{Math.round(inputContent.length / 500)} pages </span>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
