import { useState } from "react";
import "./App.css";
import TextInput from "./Components/TextInput";
import IncomingText from "./Components/IncomingText";
import InputBox from "./Components/InputBox";
import ToolBar from "./Components/ToolBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center w-screen">
      <div className="w-4/5 md:4/5 lg:w-2/5 ">
        <div className="flex gap-x-4 mb-3">
          <TextInput />
          <IncomingText />
        </div>
        <InputBox />
        <ToolBar />
      </div>
    </div>
  );
}

export default App;
