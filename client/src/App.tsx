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
    <div className="flex flex-col text-[32px] items-center gap-6">
      <div className="font-eb-garamond">OdistAI</div>
      <div className="flex items-center justify-center w-full mt-16 xl:mt-0 bg-matte-black-light">
        <div className="w-4/5 xl:flex gap-x-16">
          <div className="text-center sm:w-full md:w-full lg:w-full xl:w-3/4">
            <div className="border-b-2 text-zinc-500 block mb-8 pb-3 text-left">
              <div className="text-zinc-500 text-lg pb-3">Title</div>
              <div
                className="text-white font-semibold text-xl outline-none pb-3"
                contentEditable
                suppressContentEditableWarning
              >
                Try Writing and Highlighting Some Text :3
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
          <div className="flex flex-col justify-center items-center sm:w-full md:w-full lg:w-full xl:w-1/4 h-[80vh] gap-4 -mt-9">
            <h3 className="text-center text-[20px]">About The Project</h3>
            <div className="flex flex-col h-4/5 items-center w-full overflow-y-auto gap-y-8 text-center p-5 bg-[#1B1B1B]">
              <div className="pt-6 flex flex-col items-center text-left gap-y-5">
                <h3 className="text-[20px]">Project Description</h3>
                <p className="text-[13px] px-10 pb-4">
                  Odist.app is a proof-of-concept web application that assists users in general writings, papers, and essays. This AI-powered companion application enables users to input various prompts and, in turn, respond with helpful suggestions based on the supplied writing style. Odist.app utilizes ChatGPT API as its supporting AI model to answer users' inquiries effectively. Although this application is still a work in progress, the essential proof of concept features are operational.

                  <br></br><br></br>The primary purpose of this project is to aid and transform a bland piece of writing into a beautifully written response. In addition, the project was an excellent opportunity for teenage coders to gain experience with new technology and learn how to incorporate the power of AI into their arsenal of tools. 
                </p>
                <p className="text-[20px] px-10 pb-4">Team Members</p>
                <p className="text-[14px] px-10">Creative Tech Studio Lead</p>
                <img className="rounded-full w-40" src={Handy} alt="image" />
                <p className="text-[12px] mt-2">Handy D.</p>
              </div>
              <div className="flex flex-col items-center text-center gap-y-5">
                <p className="text-[14px] px-10 pt-4">Frontend Developer</p>
                <img
                  className="rounded-full w-40 grayscale"
                  src={Phaedra}
                  alt="image"
                />
                <p className="text-[12px] mt-2">Phaedra S.</p>
              </div>
              <div className="flex flex-col items-center text-center gap-y-5">
                <p className="text-[14px] px-10 pt-4">Web Designer</p>
                <img className="rounded-full w-40" src={Gordan} alt="image" />
                <p className="text-[12px] mt-2">Gordan L.</p>
              </div>
              <div className="flex flex-col items-center text-center gap-y-5">
                <p className="text-[14px] px-10 pt-4">Assistant Mentor</p>
                <img className="rounded-full w-40" src={Luke} alt="image" />
                <p className="text-[12px] mt-2">Luke C.</p>
              </div>
              <div className="flex flex-col items-center text-center gap-y-5">
                <p className="text-[14px] px-10 pt-4">Backend Developer</p>
                <img
                  className="rounded-full w-40 grayscale"
                  src={User}
                  alt="image"
                />
                <p className="text-[12px] mt-2">Youssef J.</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="h-screen bg-neutral-700/20 grow-0 w-96">
          about creators of the thing
      </div> */}
      </div>
    </div>
  );
}

export default App;
