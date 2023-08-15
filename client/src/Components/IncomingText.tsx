type DataCallback = (data: string) => void;
type StatusCallback = (data: boolean) => void;

const IncomingText: React.FC<{
    chatgptResponse: string,
    prompt: string,
    highlightedText: string,
    inputContent: string,
    setInputContent: DataCallback,
    caretLocation: number,
    setHighlightedText: DataCallback,
    setIsHighlightingText: StatusCallback,
}> = ({
    chatgptResponse,
    prompt,
    highlightedText,
    inputContent,
    setInputContent,
    caretLocation,
    setHighlightedText,
    setIsHighlightingText
}) => {
    const textbox = document.getElementById('essay-content') as HTMLDivElement;
    const handleReplace = () => {
        const textContent = inputContent;
        const updatedText = textContent.slice(0, caretLocation - highlightedText.length) + (chatgptResponse || "") + textContent.slice(caretLocation);
        // const updatedText = textContent.replace(highlightedText, chatgptResponse);
        textbox.innerHTML = updatedText;
        setInputContent(textbox.innerText);
        setIsHighlightingText(false);
    };
    const handleInsert = () => {
        const textContent = inputContent;
        const updatedText = textContent.slice(0, caretLocation - highlightedText.length) + `<br>${(chatgptResponse || "")}\n<br>` + textContent.slice(caretLocation);
        // const updatedText = textContent.replace(highlightedText, chatgptResponse);
        textbox.innerHTML = updatedText;
        chatgptResponse = '';
        setInputContent(textbox.innerText);
        setIsHighlightingText(false);
    };
    const handleCancel = () => {
        setHighlightedText('');
        setIsHighlightingText(false);
        chatgptResponse = '';
    };
	console.log("What is highlighted? ", highlightedText)
    return (
		<div className="bg-zinc-900 h-fit my-4 mx-0 p-3 rounded justify-self-end transition-all opacity-0 delay-200 duration-700 opacity-100 select-none">
            <div className="font-italic text-white font-semibold">"{prompt}"</div>
            {/* <div className="bg-zinc-900 h-fit my-4 mx-0 p-3 rounded justify-self-end transition-all opacity-0 delay-200 duration-700 opacity-100"></div> */}
            <textarea readOnly
                id="message"
                name="response"
                value={chatgptResponse === "" ? "Waiting for suggestions..." : chatgptResponse}
                className="resize-none block h-48 w-full p-3 overflow-y-auto text-sm text-gray-900 drop-shadow-2xl bg-gray-50 rounded focus:ring-blue-500 focus:border-blue-500 dark:bg-transparent dark:border-zinc-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-600 dark:focus:border-rose-500 outline-none"/>
            {chatgptResponse.length > 0 && <div className="flex justify-end align-items gap-3">
                <button onClick={handleReplace}>Replace</button>
                <button onClick={handleInsert}>Insert Below</button>
                <button onClick={handleCancel}>Cancel</button>
            </div> }
        </div>
	);
}

export default IncomingText;