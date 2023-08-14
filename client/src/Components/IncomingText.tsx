const IncomingText: React.FC<{ chatgptResponse: string, prompt: string, isHighlightingText: boolean }> = ({ chatgptResponse, prompt, isHighlightingText }) => {
	console.log("What is highlighted? ", isHighlightingText)
    return (
		<div className="bg-zinc-900 h-fit my-4 mx-0 p-3 rounded justify-self-end transition-all opacity-0 delay-200 duration-700 opacity-100">
            <div className="bg-zinc-900 h-fit my-4 mx-0 p-3 rounded justify-self-end transition-all opacity-0 delay-200 duration-700 opacity-100">{chatgptResponse === "" ? "Waiting for suggestions..." : chatgptResponse}</div>
            <div className="font-italic text-white font-semibold">"{prompt}"</div>
            <textarea readOnly
                id="message"
                name="response"
                className="resize-none block h-48 w-full p-3 overflow-y-auto text-sm text-gray-900 drop-shadow-2xl bg-gray-50 rounded focus:ring-blue-500 focus:border-blue-500 dark:bg-transparent dark:border-zinc-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-600 dark:focus:border-rose-500 outline-none"
            />
            {chatgptResponse.length > 0 && <div className="flex justify-end align-items gap-3">
                <button>Replace</button>
                <button>Insert Below</button>
                <button>Cancel</button>
            </div> }
        </div>
	);
}

export default IncomingText;