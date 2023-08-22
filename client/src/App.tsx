import { useState } from "react";
import "./App.css";
import TextInput from "./Components/TextInput";
import IncomingText from "./Components/IncomingText";
import ToolBar from "./Components/ToolBar";
import User from "./assets/user.png";
import Luke from "./assets/luke.png";
import Handy from "./assets/handy.png";
import Gordan from "./assets/gordan.png";
import Phaedra from "./assets/phaedra.png";

function App() {
  const [highlightedText, setHighlightedText] = useState("");
  const [chatgptResponse, setChatgptResponse] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [isHighlightingText, setIsHighlightingText] = useState(false);
  const [caretLocation, setCaretLocation] = useState(0);
  // console.log("this is true? ", isHighlightingText)

  const wordCount = (div: HTMLDivElement) => {
    if (!div) return 0;
    return div.innerText.trim().split(/\W+/).length;
  };

  return (
    <div className="flex items-center justify-center w-full mt-16 lg:mt-0 bg-matte-black-light">
      <div className="w-4/5 lg:flex gap-16">
        <div className="text-center sm:w-full lg:w-2/3">
          <div className="border-b-2 text-zinc-500 block mb-8 pb-3 text-left">
            <div className="text-zinc-500 text-lg pb-3">Title</div>
            <div
              className="text-white font-semibold text-xl outline-none pb-3"
              contentEditable
              suppressContentEditableWarning
            >
              Try Write and Highlighting Some Text :3
            </div>
          </div>
          <div className="flex flex-col block h-[60vh] mb-2 bg-matte-black-light">
            <TextInput
              onData={setHighlightedText}
              onContentChange={setInputContent}
              setHighlight={setIsHighlightingText}
              isHighlighted={isHighlightingText}
              setCaretLocation={setCaretLocation}
              onPopUp={setChatgptResponse}
            >
              <div className="bg-[#1B1B1B] h-fit p-3 rounded justify-self-end transition-all opacity-0 delay-200 duration-700 opacity-100 card-stretch ">
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
                <ToolBar
                  onData={setChatgptResponse}
                  highlighted={highlightedText}
                />
              </div>
            </TextInput>
          </div>

          <footer className="border-t-2 text-zinc-500 pt-3 text-left text-xs">
            {/* {inputContent !== "" ? inputContent.trim().split(" ").length : 0}{" "}
              words -{" "} */}
            <span>
              {wordCount(
                document.getElementById("essay-content") as HTMLDivElement
              )}{" "}
              words -{" "}
            </span>
            <span>{inputContent.length} characters - </span>
            <span>{Math.round(inputContent.length / 500)} pages </span>
          </footer>
        </div>
        <div className="flex flex-col justify-center items-center sm:w-full lg:w-1/4 h-[80vh] gap-4 mt-1.5">
          <h3 className="text-center">About The Project</h3>
          <div className="flex flex-col h-4/5 items-center w-full overflow-y-auto gap-y-8 text-center p-5 bg-[#1B1B1B]">
            <div className="pt-6 flex flex-col items-center text-center gap-y-5">
              <h3>Project Description</h3>
              <p className="text-[12px] px-10 pb-4">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.
              </p>
              <img className="rounded-full w-40" src={Handy} alt="image" />
              <p className="text-[14px] mt-2">Handy D.</p>
            </div>
            <div className="flex flex-col items-center text-center gap-y-5">
              <img
                className="rounded-full w-40 grayscale"
                src={Phaedra}
                alt="image"
              />
              <p className="text-[14px] mt-2">Phaedra S.</p>
            </div>
            <div className="flex flex-col items-center text-center gap-y-5">
              <img className="rounded-full w-40" src={Gordan} alt="image" />
              <p className="text-[14px] mt-2">Gordan L.</p>
            </div>
            <div className="flex flex-col items-center text-center gap-y-5">
              <img className="rounded-full w-40" src={Luke} alt="image" />
              <p className="text-[14px] mt-2">Luke C.</p>
            </div>
            <div className="flex flex-col items-center text-center gap-y-5">
              <img className="rounded-full w-40" src={User} alt="image" />
              <p className="text-[14px] mt-2">Youssef J.</p>
            </div>
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
