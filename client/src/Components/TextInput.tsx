import { Fragment, ReactNode, useState } from "react";

type DataCallback = (data: string) => void;
type StatusCallback = (data: boolean) => void;

const TextInput: React.FC<{
  onData: DataCallback;
  onContentChange: DataCallback;
  children: ReactNode;
  setHighlight: StatusCallback;
  isHighlighted: boolean;
}> = ({ onData, onContentChange, children, setHighlight, isHighlighted }) => {
  const parser = new DOMParser();
  const [essayContent, setEssayContent] = useState("");

  const handleOnMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    handleHighlight(e);
  };

  const handleHighlight = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const selectedText = window.getSelection()?.toString();

    if (selectedText === "") return;
    console.log("selected", selectedText);
    const lastNodeOfSelection = window.getSelection()?.anchorNode;

    // console.log(lastNodeOfSelection);
    const allEssayNodes = Array.from(
      (document.getElementById("essay-content") as HTMLDivElement).childNodes
    )?.filter((node) => node.nodeName.toUpperCase() !== "TEXTAREA");
    allEssayNodes.map((node: ChildNode, idx: number) => {
      console.log("idx:", idx, node);
    });
    // const rerenderedNodes = (
    //     <Fragment>
    //         {allEssayNodes.map((node: ChildNode, idx: number) => {
    //             if (node.isSameNode(lastNodeOfSelection!)) {
    //                 return (
    //                     <Fragment key={idx}>
    //                         {children}
    //                     </Fragment>
    //                 )
    //             } else {
    //                 return ( null )
    //             }
    //         })}
    //     </Fragment>
    // )

    // console.log(rerenderedNodes);
    // (document.getElementById('essay-content') as HTMLDivElement).innerHTML = '';
    // TODO: insert the ai suggestion box after the last node (div paragraph in this case)

    // console.log(selectedText);
    if (selectedText && selectedText !== "") {
      setHighlight(true);
      onData(selectedText);
    } else {
      setHighlight(false);
    }
  };

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    onContentChange((e.target as HTMLDivElement).textContent!);
    // setEssayContent((e.target as HTMLDivElement).textContent!);
  };

  // if (document.getElementById('essay-content')) {
  //     console.log(essayContent);
  //     (document.getElementById('essay-content') as HTMLDivElement).childNodes.forEach(child => {
  //         (document.getElementById('essay-content') as HTMLDivElement).removeChild(child);
  //     })
  // }

  return (
    <>
      <div
        id="essay-content"
        className="transition-all duration-300 h-full mb-8 text-sm text-gray-900 group-focus:drop-shadow-2xl bg-matte-black-light dark:placeholder-gray-400 dark:text-white text-left outline-none flex-col flex"
        // placeholder="Enter text..."
      >
        <div
          className="w-full h-1/4 outline-none "
          contentEditable
          onMouseUp={handleOnMouseUp}
          suppressContentEditableWarning={true}
          onInput={handleInput}
        ></div>
        {isHighlighted && children}
      </div>
    </>
  );
};

export default TextInput;
