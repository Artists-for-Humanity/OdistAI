/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import axios from 'axios';
import { useState } from 'react';
import classNames from 'classnames';
// import TextInput from './TextInput';

type DataCallback = (data: string) => void;

const ToolBar: React.FC<{ onData: DataCallback, highlighted: string }> = ({ onData, highlighted }) => {
  const [critique, setCritique] = useState('');
  const baseCritique = {
    improveWriting: true,
    makeLonger: false,
    makeShorter: false,
    fixSpellingAndGrammar: false
  }
  const [activeCritique, setActiveCritique] = useState(baseCritique);

  const fetchData = async () => {
    // Uncomment this to see the hardcorded version is working.
    console.log("this is the highlighted data in ToolBar right now", highlighted)
    const prompt = 'use these critiques: ' + critique + 'to edit the following text: "' + highlighted + '"'

    try {
      const apiUrl = 'http://localhost:8080/chat'; // Placeholder API URL, change it to the express URL address
      const requestData = { message: prompt }; // Request data to be sent, it

      const response = await axios.post(apiUrl, requestData);
      onData(response.data.completion.content)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const updateActiveCritique = (prev: typeof baseCritique, property: keyof typeof baseCritique) => {
    const result = {
      ...prev,
      [property]: !prev[property]
    };

    setCritique(classNames({
      'improve writing,': activeCritique.improveWriting,
      'make the passage longer,': activeCritique.makeLonger,
      'make the passage shorter,': activeCritique.makeShorter,
      'fix spelling and grammar,': activeCritique.fixSpellingAndGrammar,
    }));
    console.log(critique);

    return result;
  };


  return (

    <div className = "flex flex-col justify-around gap-4 p-3" >
    <div className = "flex gap-5 items-center">
      <input 
        className='py-1.5 w-2/3 p-3 rounded-full max-w-md bg-neutral-900'
        placeholder="  Ask AI..."
      ></input>

      <div className={classNames({
        'w-4 h-4 rounded-full': true,
        'bg-blue-400': activeCritique.improveWriting,
        'bg-zinc-800': !activeCritique.improveWriting,
      })}></div>
      <div className={classNames({
        'w-4 h-4 rounded-full': true,
        'bg-purple-400': activeCritique.makeLonger,
        'bg-zinc-800': !activeCritique.makeLonger,
      })}></div>
      <div className={classNames({
        'w-4 h-4 rounded-full': true,
        'bg-green-400': activeCritique.makeShorter,
        'bg-zinc-800': !activeCritique.makeShorter,
      })}></div>
      <div className={classNames({
        'w-4 h-4 rounded-full': true,
        'bg-rose-400': activeCritique.fixSpellingAndGrammar,
        'bg-zinc-800': !activeCritique.fixSpellingAndGrammar,
      })}></div>
      <button className='rounded bg-zinc-500' onClick={fetchData}>send</button>
    </div>
    <div className="items-center justify-left hidden col-span-1 space-x-2 sm:flex">
      {/* Improve writing, blue-400 */}
      <button
        type="button"
        className="flex bg-neutral-900 rounded-full items-center gap-3"
        onClick={() => setActiveCritique(prev => updateActiveCritique(prev, 'improveWriting'))}
      >
        <span className={classNames({
          'w-3 h-3 rounded-full': true,
          'bg-blue-400': activeCritique.improveWriting,
          'bg-zinc-800': !activeCritique.improveWriting,
        })}></span>
        Improve writing
      </button>

      {/* Make longer */}
      <button
        type="button"
        className="flex gap-3 items-center rounded-full"
        onClick={() => setActiveCritique(prev => updateActiveCritique(prev, 'makeLonger'))}
      >
        <span className={classNames({
          'w-3 h-3 rounded-full': true,
          'bg-purple-400': activeCritique.makeLonger,
          'bg-zinc-800': !activeCritique.makeLonger,
        })}></span>
        Make longer
      </button>

      {/* Make shorter */}
      <button
        type="button"
        className="flex gap-3 items-center rounded-full"
        onClick={() => setActiveCritique(prev => updateActiveCritique(prev, 'makeShorter'))}
      >
        <span className={classNames({
          'w-3 h-3 rounded-full': true,
          'bg-green-400': activeCritique.makeShorter,
          'bg-zinc-800': !activeCritique.makeShorter,
        })}></span>
        Make shorter
      </button>

      {/* Fix spelling and grammar */}
      <button
        type="button"
        className="flex gap-3 items-center rounded-full"
        onClick={() => setActiveCritique(prev => updateActiveCritique(prev, 'fixSpellingAndGrammar'))}
      >
        <span className={classNames({
          'w-3 h-3 rounded-full': true,
          'bg-rose-400': activeCritique.fixSpellingAndGrammar,
          'bg-zinc-800': !activeCritique.fixSpellingAndGrammar,
        })}></span>
        Fix spelling grammar
      </button>
    </div>
    </div>)
}

export default ToolBar