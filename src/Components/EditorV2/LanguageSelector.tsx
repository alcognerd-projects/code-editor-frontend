import React from "react";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import useCodeContext from "../../context/CodeContext";

interface LanguageSelectorProps  {
  code:string
  setCode:(code:string)=>void
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({setCode}) => {
  const {selectedLang,setSelectedLang} = useCodeContext();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    switch (newLang) {
      case "java":
        setSelectedLang(java());
        setCode(
          `// class name should be Main
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`
        );
        break;
      case "cpp":
        setSelectedLang(cpp());
        setCode(`#include <iostream>\nusing namespace std;\nint main() { \n    cout << "Hello, C++!";\n    return 0;\n}`);
        break;
      case "python":
        setSelectedLang(python());
        setCode(`print("Hello, Python!")`);
        break;
    }
  };

  return (
    <select
      className="border-2 w-36 border-green-600 bg-zinc-900 text-white rounded-md cursor-pointer p-1"
      value={selectedLang}
      onChange={handleChange}
    >
      <option value="java">Java</option>
      <option value="cpp">C++</option>
      <option value="python">Python</option>
    </select>
  );
};

export default LanguageSelector;
