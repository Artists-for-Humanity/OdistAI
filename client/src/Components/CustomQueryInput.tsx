const CustomQueryInput = () => {
  const handleInput = (e: React.FormEvent<HTMLInputElement> ) => {
    if ((e.target as HTMLInputElement).value && (e.target as HTMLInputElement).value !== '') {
      // content
      console.log('adding stuff i think')
    }
  };
  return (
    <input
      id="custom-query"
      onInput={handleInput}
      className='py-1.5 w-2/3 pl-5 rounded-full max-w-md'
      placeholder="Ask AI..."
    />
  )
}

export default CustomQueryInput;