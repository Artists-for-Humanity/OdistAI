
import axios from 'axios';

type DataCallback = (data: string) => void;

const ToolBar : React.FC<{ onData: DataCallback, highlighted:string}> = ({onData, highlighted}) => {

  const fetchData = async () => {
    // Uncomment this to see the hardcorded version is working.
    console.log("this is the highlighted data in ToolBar right now", highlighted)
    const prompt = '"' + highlighted + '"'
    
    try {
      const apiUrl = 'http://localhost:8080/chat'; // Placeholder API URL, change it to the express URL address
      const requestData = { message: prompt }; // Request data to be sent, it

      const response = await axios.post(apiUrl, requestData);
      onData(response.data.completion.content)
    } catch (error) {
      console.error('Error:', error);
    }
  };


    return(
        
    <div className="items-center justify-center hidden col-span-1 space-x-2 sm:flex">
        <button
        type="button"
        className="text-blue-700 shadow-lg hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        onClick={fetchData}
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
    </div>)
}

export default ToolBar