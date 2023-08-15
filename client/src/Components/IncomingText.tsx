const IncomingText: React.FC<{
  chatgptResponse: string;
  prompt: string;
  isHighlightingText: boolean;
}> = ({ chatgptResponse, prompt, isHighlightingText }) => {
  console.log("What is highlighted? ", isHighlightingText);
  return (
    <div className="p-8 break-words delay-200 duration-500 ease-in">
      <div className="">
        {chatgptResponse === "" ? prompt : chatgptResponse}
      </div>

      {chatgptResponse.length > 0 && (
        <div className="flex justify-end align-items gap-3">
          <button>Replace</button>
          <button>Insert Below</button>
          <button>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default IncomingText;
