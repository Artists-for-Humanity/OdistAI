import { useState } from "react";
import "./App.css";
import TextInput from "./Components/TextInput";
import IncomingText from "./Components/IncomingText";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="flex flex-row gap-x-8">
        <TextInput></TextInput>
        <IncomingText></IncomingText>
      </div>
      <div className="items-center justify-center hidden col-span-1 space-x-2 sm:flex">
        <button
          type="button"
          className="text-blue-700 shadow-lg hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >
          Refine
        </button>

        <button
          type="button"
          className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Accept
        </button>

        <button
          type="button"
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Reject
        </button>
      </div>
    </div>
  );
}

export default App;
