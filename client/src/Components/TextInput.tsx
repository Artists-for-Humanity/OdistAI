import { ReactNode } from "react";
// import DOMPurify from 'dompurify';
type DataCallback = (data: string) => void;
type StatusCallback = (data: boolean) => void;
type NumberCallback = (data: number) => void;

const TextInput: React.FC<{ onData: DataCallback, onContentChange: DataCallback, children: ReactNode, setHighlight: StatusCallback, isHighlighted: boolean, setCaretLocation: NumberCallback }> = ({ onData, onContentChange, children, setHighlight, isHighlighted, setCaretLocation }) => {
    function getCaretCharacterOffsetWithin(element: Element) {
        let caretOffset = 0;
        // const doc = document;
        const win = window;
        let sel;
        if (win.getSelection) {
            sel = win.getSelection();
            if ((sel as Selection).rangeCount > 0) {
                const range = win.getSelection()!.getRangeAt(0);
                const preCaretRange = range.cloneRange();
                preCaretRange.selectNodeContents(element);
                preCaretRange.setEnd(range.endContainer, range.endOffset);
                caretOffset = preCaretRange.toString().length;
            }
        }
        // other browser support
        // else if ( (sel === doc.selection) && sel.type != "Control") {
        //     const textRange = sel.createRange();
        //     const preCaretTextRange = doc.body.createTextRange();
        //     preCaretTextRange.moveToElementText(element);
        //     preCaretTextRange.setEndPoint("EndToEnd", textRange);
        //     caretOffset = preCaretTextRange.text.length;
        // }
        return caretOffset;
    }
    // const contentEditableRef = useRef(null);

    const handleOnMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
        handleHighlight(e)
    }

    const handleHighlight = (e: React.MouseEvent<HTMLDivElement>) => {

        e.preventDefault();
        const selectedText = window.getSelection()?.toString();
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        setCaretLocation(getCaretCharacterOffsetWithin(e.target as HTMLDivElement));

        if (selectedText === '') {
            setHighlight(false);
            return;
        } else if (selectedText && selectedText !== '') {
            setHighlight(true);
            onData(selectedText);
        }
    };

    const handleInput = (e: React.FormEvent<HTMLDivElement>) => {

        onContentChange((e.target as HTMLDivElement).textContent!);
    }
    return (
        <div
            className="transition-all duration-300 h-full mb-8 w-full text-sm text-gray-900 group-focus:drop-shadow-2xl bg-gray-50 rounded-lg dark:placeholder-gray-400 dark:text-white text-left outline-none flex-col flex overflow-y-auto bg-matte-black-light"
        // placeholder="Enter text..."
        >
            <div
                className="w-full h-full p-2.5 outline-none max-h-full break-words text-base bg-matte-black-light shrink overflow-y-auto mb-3"
                contentEditable
                id="essay-content"
                onMouseUp={handleOnMouseUp}
                suppressContentEditableWarning={true}
                onInput={handleInput}
            >
            </div>
            {isHighlighted && children}
        </div>
    )

}

export default TextInput;