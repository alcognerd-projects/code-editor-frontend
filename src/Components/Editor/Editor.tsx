import { basicSetup } from "codemirror";
import { EditorView } from "@codemirror/view";
import { oneDark } from "@codemirror/theme-one-dark";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import { useEffect, useRef, useState } from "react";
import useCodeContext from "../../context/CodeContext";
import { handleRunCode } from "../../hooks/codeRunner";

const Editor = () => {
	const [lang, setLang] = useState(() => java());
	const [selectedLang, setSelectedLang] = useState("java");
	const { setOutput, input, setErr, isExecuting, setIsExecuting } = useCodeContext();
	const [code, setCode] = useState(
		`// class name should be Main
    public class Main {
        public static void main(String[] args) {
                System.out.println("Hello, Java!");
             }
    }`
	);

	const editorRef = useRef<HTMLDivElement | null>(null);
	const editorInstance = useRef<EditorView | null>(null);

	useEffect(() => {
		if (!editorRef.current) return;

		if (editorInstance.current) {
			editorInstance.current.destroy();
		}

		editorInstance.current = new EditorView({
			doc: code, // Convert `\n` string to actual newlines
			extensions: [
				basicSetup,
				oneDark,
				lang,
				EditorView.updateListener.of((update) => {
					if (update.docChanged) {
						const newCode = update.state.doc.toString();
						setCode(newCode); // Convert back to `\n` string
					}
				}),
			],
			parent: editorRef.current,
		});

		return () => {
			editorInstance.current?.destroy();
		};
	}, [lang]);
	const handleCodeRun = () => {
		handleRunCode(selectedLang, code, input, setErr, setOutput, setIsExecuting);
	};
	return (
		<div className="h-[70%] p-2 flex flex-col gap-2">
			<div className="flex justify-between">
				<select
					className="border-2 w-36 border-green-600 bg-zinc-900 text-white rounded-md cursor-pointer p-1"
					value={selectedLang}
					onChange={(e) => {
						const newLang = e.target.value;
						setSelectedLang(newLang);
						if (newLang === "java") {
							setLang(java());
							setCode(
								`// class name should be Main
    public class Main {
        public static void main(String[] args) {
                System.out.println("Hello, Java!");
           }
    }`
							);
						} else if (newLang === "cpp") {
							setLang(cpp());
							setCode(
								`#include <iostream> 
using namespace std;
int main() { 
cout << "Hello, C++!"; 
  return 0;
  }`
							);
						} else if (newLang == "python") {
							setLang(python());
							setCode(`print("Hello, Python!")`);
						}
					}}
				>
					<option value="cpp">C++</option>
					<option value="java">Java</option>
					<option value="python">Python 3</option>
				</select>
				<div className="flex justify-end gap-2">
					<button
						onClick={handleCodeRun}
						disabled={isExecuting}
						className="bg-green-500 w-24 p-1 rounded-md text-white font-bold cursor-pointer"
					>
						{isExecuting ? "Runing" : "Run"}
					</button>
				</div>
			</div>

			{/* Code Editor */}
			<div ref={editorRef} className="h-full w-full bg-[#282c34] rounded-md text-lg" />
		</div>
	);
};

export default Editor;
