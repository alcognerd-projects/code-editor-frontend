import { basicSetup } from "codemirror";
import { EditorView } from "@codemirror/view";
import { oneDark } from "@codemirror/theme-one-dark";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import { useEffect, useRef, useState } from "react";


const Editor = () => {
  const [lang, setLang] = useState(() => java());
  const [SelecteLang, setSelecteLang] = useState("java");
  const [defaultval, setDefaultval] = useState(`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`);

  const myTheme = EditorView.theme({
    ".cm-cursor": {
      borderLeftWidth: "3px", // Increase cursor size
    },
  });

  const editoraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!editoraRef.current) return;
    const view = new EditorView({
      doc: defaultval,
      extensions: [basicSetup, oneDark, lang, myTheme],
      parent: editoraRef.current,
    });
    return () => {
      view.destroy();
    };
  }, [lang, defaultval]);

  return (
    <div className="h-[73%]  pt-2 flex flex-col gap-2 ">
      <select
        name=""
        id=""
        className=" border-2 w-36 border-green-600 bg-zinc-900 text-white rounded-md cursor-pointer p-1"
        value={SelecteLang}
        onChange={(e) => {
          const selectLang = e.target.value;
          setSelecteLang(selectLang);
          if (selectLang === "java") {
            setLang(java());
            setDefaultval(
              `public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}`
            );
          } else if (selectLang === "cpp") {
            setLang(cpp());
            setDefaultval(
              `#include <iostream>\nusing namespace std;\nint main() {\n    cout << "Hello, C++!";\n    return 0;\n}`
            );
          } else {
            setLang(python());
            setDefaultval(`print("Hello, Python!")`);
          }
        }}>
        <option value="cpp" >C++</option>
        <option value="java">Java</option>
        <option value="python">Python 3</option>
      </select>

      <div className="h-full rounded-md overflow-y-scroll bg-[#282c34] text-lg">
        <div
          className="cm-cursor px-3"
          ref={editoraRef}
        />
      </div>
      <div className="flex justify-end">
        <button className="bg-green-500 w-24 p-1 rounded-md text-slate-50 font-bold cursor-pointer ">
          Run
        </button>
      </div>
    </div>
  );
};

export default Editor;
