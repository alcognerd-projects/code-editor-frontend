import { useState, useEffect } from "react";
// import CodeEditor from "./Screen/CodeEditor";
import CodeEditor from "./Components/EditorV2/CodeEditor";
import Warning from "./Components/Editor/Warning";
import "./App.css";
const App = () => {
  const [showWarn, setShowWarn] = useState(false);


  useEffect(() => {
    const checkScreensize = () => {
      setShowWarn(window.innerWidth < 1024);
    };
    checkScreensize();
    window.addEventListener("resize", checkScreensize);
    return () => window.removeEventListener("resize", checkScreensize);
  }, []);

  return (
    <div className="h-screen  bg-[#1f1f1f] p-3 font-[Poppins] ">
      {showWarn ? <Warning /> : <CodeEditor  roomId="1234" username="sri" />}
    </div>
  );
};

export default App;
