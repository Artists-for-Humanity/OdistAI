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
    setIsHighlightingText,
}) => {
        const textbox = document.getElementById('essay-content') as HTMLDivElement;
        console.log(chatgptResponse);
        const response = chatgptResponse.replace('\n', '<br>')
        const handleReplace = () => {
            const textContent = inputContent;
            const updatedText = textContent.slice(0, caretLocation - highlightedText.length) + (response || "") + textContent.slice(caretLocation);
            // const updatedText = textContent.replace(highlightedText, chatgptResponse);
            textbox.innerHTML = updatedText;
            setInputContent(textbox.innerText);
            setIsHighlightingText(false);
        };
        const handleInsert = () => {
            const textContent = inputContent;
            const updatedText = textContent.slice(0, caretLocation) + `<br>${(chatgptResponse || "")}\n<br>` + textContent.slice(caretLocation);
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
        return (
            <div className="relative h-fit my-4 mx-0 p-3 rounded justify-self-end transition-all opacity-0 delay-200 duration-700 opacity-100 select-none">
                <button type="button" className="absolute right-0 bg-zinc-700 mr-5 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" onClick={handleCancel}>
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
                <div className="font-italic text-white font-semibold break-words">"{prompt}"</div>
                {/* <div className="bg-zinc-900 h-fit my-4 mx-0 p-3 rounded justify-self-end transition-all opacity-0 delay-200 duration-700 opacity-100"></div> */}
                <textarea readOnly
                    id="message"
                    name="response"
                    value={chatgptResponse === "" ? "Waiting for suggestions..." : chatgptResponse}
                    className="resize-none block h-48 w-full p-3 overflow-y-auto text-sm text-gray-900 drop-shadow-2xl bg-gray-50 rounded focus:ring-blue-500 focus:border-blue-500 dark:bg-transparent dark:border-zinc-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-600 dark:focus:border-rose-500 outline-none" />
                {chatgptResponse.length > 0 && <div className="flex justify-end align-items gap-3">
                    <button onClick={handleReplace}>Replace</button>
                    <button onClick={handleInsert} disabled>Insert Below</button>
                    <button onClick={handleCancel}>Cancel</button>
                    </div>
                }
            </div>
        );
    }

export default IncomingText;