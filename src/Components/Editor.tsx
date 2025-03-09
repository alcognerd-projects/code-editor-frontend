const Editor = () => {
  return (
    <div className="h-[73%]  p-2 flex flex-col gap-2 ">
        <select name="" id="" className=" border-2 w-36 border-green-600 bg-zinc-900 text-white rounded-md">
            <option value="">C++</option>
            <option value="">Java</option>
            <option value="">Python 3</option>
        </select>

        <div className=" h-full bg-black rounded-md ">
          <p className="text-green-300 p-2 px-5"> //write code here</p>
        </div>
        <div className="flex justify-end">

        <button className="bg-green-500 w-24 p-1 rounded-md text-slate-50 font-bold cursor-pointer ">Run</button>
        </div>
      
    </div>
  )
}

export default Editor
