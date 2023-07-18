import { useState } from "react";

function TextInput() {

    const [highlightedText, setHighlightedText] = useState("")


    const handleHighlight = (e : React.MouseEvent<HTMLTextAreaElement>) => {

        const textarea = e.target as HTMLTextAreaElement
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
  
        if (start !== null && end !== null) {
            
            const highlighted = textarea.value.substring(start, end);
            console.log("This is the highlighted text: ", highlightedText)

            setHighlightedText(highlighted);
          } else {
            setHighlightedText('');
          }
    };
    return (
    <textarea
        id="message"
        className="resize-none block w-96 h-80 mb-8 p-2.5 w-full text-sm text-gray-900 drop-shadow-2xl bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter text..."
        onMouseUp={handleHighlight}></textarea>)

}

export default TextInput;