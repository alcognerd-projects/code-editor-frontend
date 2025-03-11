

const InputOutput = () => {
  return (
    <div className="h-[24%] flex flex-col px-2 text-white">
      <div className="w-full flex justify-around gap-3 ">
          <p className="w-1/2  px-2">Input</p>
          <p className="w-1/2  px-2 ">Output</p>
      </div>
      <div className="h-full w-full flex gap-3">
          <textarea className="bg-black max-h-[135px] min-h-[135px] w-1/2 focus:ring-0 focus:outline-none rounded-xl border-2 border-violet-300"/>
          <textarea className="bg-black max-h-[135px] min-h-[135px] w-1/2 focus:ring-0 focus:outline-none  rounded-xl border-2 border-violet-300 "/>
      </div>
    </div>
  )
}

export default InputOutput
