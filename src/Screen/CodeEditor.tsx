
import Editor from '../Components/Editor'
import InputOutput from '../Components/InputOutput'
import Userlist from '../Components/Userlist'

const CodeEditor = () => {
  return (
    <div className="h-full w-full flex justify-center items-center gap-2">
      <div className="h-full w-full ">
      <Editor/>
      <InputOutput/>
      </div>
      <div className="h-[88%] w-2/6">
      <Userlist/> 
      </div>
    </div>
  )
}

export default CodeEditor
