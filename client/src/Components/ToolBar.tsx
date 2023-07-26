function ToolBar() {
  return (
    <div className="flex justify-center gap-x-2">
      <button
        type="button"
        className="text-blue-700 shadow-lg hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
      >
        Go
      </button>
      <button
        type="button"
        className="text-center text-white text-sm bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-md shadow-green-500/50 dark:shadow-md dark:shadow-green-800/80 font-medium rounded-lg px-5 py-2.5"
      >
        Accept Changes
      </button>

      <button
        type="button"
        className="text-center text-white text-sm bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-md shadow-red-500/50 dark:shadow-md dark:shadow-red-800/80 font-medium rounded-lg px-5 py-2.5"
      >
        Previous Response
      </button>
    </div>
  );
}

export default ToolBar;
