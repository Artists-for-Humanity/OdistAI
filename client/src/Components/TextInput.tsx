
type DataCallback = (data: string) => void;

const TextInput : React.FC<{ onData: DataCallback }> = ({ onData }) => {

    const handleOnMouseUp = (e : React.MouseEvent<HTMLTextAreaElement>) => {
        handleHighlight(e)
    }

    const handleHighlight = (e : React.MouseEvent<HTMLTextAreaElement>) => {

        const textarea = e.target as HTMLTextAreaElement
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        let highlighted = "..."
  
        if (start !== null && end !== null) {
            
            highlighted = textarea.value.substring(start, end);
            onData(highlighted)
          } 
          onData(highlighted)
    };
    return (
    <textarea
        id="message"
        className="resize-none block w-96 h-80 mb-8 p-2.5 w-full text-sm text-gray-900 drop-shadow-2xl bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter text..."
        onMouseUp={handleOnMouseUp}>

        </textarea>)

}

export default TextInput;