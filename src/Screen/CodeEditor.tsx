import Editor from "../Components/Editor/Editor";
import InputOutput from "../Components/Editor/InputOutput";
import Prensenting from "../Components/Editor/Prensenting";
import Userlist from "../Components/Editor/Userlist";

const CodeEditor = () => {
  return (
    <div className="h-full w-full flex justify-around items-center gap-1 p-2 ">
      <div className="h-full w-full ">
        <Prensenting />
        <Editor />
        <InputOutput />
      </div>
      <div className="h-[93%] w-2/5 ">
        <Userlist />
      </div>
    </div>
  );
};

export default CodeEditor;
