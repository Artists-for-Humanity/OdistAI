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

    return result;
  };

  return (
    <div className="flex flex-col justify-around gap-4 p-3" >
      <div className="flex gap-5 items-center flex-wrap">
        <div className='relative flex items-center'>
          <input
            className='py-1.5 w-full p-3 rounded-full max-w-md bg-neutral-900'
            placeholder="  Ask AI..."
          ></input>
          <button type="button" onClick={fetchData} className="absolute right-0 text-zinc-600 ring-1 ring-zinc-600 font-small rounded-full text-sm p-1 mr-2 text-center inline-flex items-center">
            <svg className="w-3 h-3 -rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="4 0 10 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
            <span className="sr-only">Icon description</span>
          </button>
        </div>
        {/* <div className="relative w-80 flex items-center">
          <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-500" placeholder="Search..."></input>
          <button className="absolute right-0 flex items-center justify-center bg-blue-500 rounded-r-lg text-white w-12 h-full focus:outline-none">
            <span className="text-lg">{"->"}</span>
          </button>
        </div> */}
        <div className={classNames({
          'w-3 h-3 rounded-full': true,
          'bg-purple': activeCritique.improveWriting,
          'bg-matte-black-dark': !activeCritique.improveWriting,
        })}></div>
        <div className={classNames({
          'w-3 h-3 rounded-full': true,
          'bg-yellow': activeCritique.makeLonger,
          'bg-matte-black-dark': !activeCritique.makeLonger,
        })}></div>
        <div className={classNames({
          'w-3 h-3 rounded-full': true,
          'bg-green-400': activeCritique.makeShorter,
          'bg-matte-black-dark': !activeCritique.makeShorter,
        })}></div>
        <div className={classNames({
          'w-3 h-3 rounded-full': true,
          'bg-rose-400': activeCritique.fixSpellingAndGrammar,
          'bg-matte-black-dark': !activeCritique.fixSpellingAndGrammar,
        })}></div>



        {/* Improve writing, blue-400 */}
        <button
          type="button"
          className="flex bg-matte-black-dark rounded-full items-center gap-3"
          onClick={() => setActiveCritique(prev => updateActiveCritique(prev, 'improveWriting'))}
        >
          <span className={classNames({
            'w-3 h-3 rounded-full': true,
            'bg-purple': activeCritique.improveWriting,
            'bg-zinc-800': !activeCritique.improveWriting,
          })}></span>
          Improve writing
        </button>

        {/* Make longer */}
        <button
          type="button"
          className="flex bg-matte-black-dark gap-3 items-center rounded-full"
          onClick={() => setActiveCritique(prev => updateActiveCritique(prev, 'makeLonger'))}
        >
          <span className={classNames({
            'w-3 h-3 rounded-full': true,
            'bg-yellow': activeCritique.makeLonger,
            'bg-zinc-800': !activeCritique.makeLonger,
          })}></span>
          Make longer
        </button>

        {/* Make shorter */}
        <button
          type="button"
          className="flex bg-matte-black-dark gap-3 items-center rounded-full"
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
          className="flex bg-matte-black-dark gap-3 items-center rounded-full"
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