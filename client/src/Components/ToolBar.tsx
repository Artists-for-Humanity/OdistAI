
import axios from 'axios';
import TextInput from './TextInput';

type DataCallback = (data: string) => void;

const ToolBar: React.FC<{ onData: DataCallback, highlighted: string }> = ({ onData, highlighted }) => {

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


  return (

    <div className = "flex flex-col justify-around gap-4 p-3" >
    <div className = "flex gap-5 items-center">
    <input 
      className='py-1.5 w-2/3 p-3 rounded-full max-w-md'
      placeholder="  Ask AI..."
    ></input>

      <div className='w-4 h-4 bg-purple-400 rounded-full'></div>
      <div className='w-4 h-4 bg-green-400 rounded-full'></div>
      <div className='w-4 h-4 bg-blue-400 rounded-full'></div>
      

    </div>
    <div className="items-center justify-left hidden col-span-1 space-x-2 sm:flex">
      <button
        type="button"
        className="flex bg-neutral-700 rounded-full items-center gap-3"
        onClick={fetchData}
      ><div className='w-3 h-3 bg-blue-400 rounded-full'></div>
        Improve writing
      </button>
      <button
        type="button"
        className="rounded-full"
        onClick={fetchData}
      >
        Make longer
      </button>
      <button
        type="button"
        className="rounded-full"
        onClick={fetchData}
      >
        Make shorter
      </button>
      <button
        type="button"
        className="rounded-full"
        onClick={fetchData}
      >
        Fix spelling grammar
      </button>
    </div>
    </div>)
}

export default ToolBar