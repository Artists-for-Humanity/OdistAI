

const IncomingText: React.FC<{ text: string }> = ({ text }) => {
	return (
		<div className="bg-zinc-900 h-56 my-4 mx-3 rounded justify-self-end transition-all opacity-0 delay-200 duration-700 opacity-100">
            <textarea readOnly
                id="message"
                name="response"
                className="resize-none block w-96 h-full  w-full text-sm text-gray-900 drop-shadow-2xl bg-gray-50 rounded focus:ring-blue-500 focus:border-blue-500 dark:bg-transparent dark:border-zinc-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-600 dark:focus:border-rose-500 outline-none"
                placeholder={text}
            />  
        </div>
	);
}

export default IncomingText;