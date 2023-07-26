function TextInput() {
  return (
    <textarea
      id="message"
      className="resize-none block w-1/2 h-80 p-2.5 text-sm text-gray-900 drop-shadow-xl bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Enter text"
    ></textarea>
  );
}

export default TextInput;
