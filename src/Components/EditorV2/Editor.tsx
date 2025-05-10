import React, { useState } from "react";
import CodeEditor from "./CodeEditor";
import LanguageSelector from "./LanguageSelector";
import RunButton from "./RunButton";
import { java } from "@codemirror/lang-java";
import useCodeContext from "../../context/CodeContext";

const Editor: React.FC = () => {
	const { selectedLang } = useCodeContext();
	const { setOutput, input, setErr, isExecuting, setIsExecuting } = useCodeContext();
	const [code, setCode] = useState(`print("Hello, Python!")`);

	return (
		<div className="h-[70%] p-2 flex flex-col gap-2">
			<div className="flex justify-between">
				<LanguageSelector setCode={setCode} />
				<RunButton
					selectedLang={selectedLang}
					code={code}
					input={input}
					setErr={setErr}
					setOutput={setOutput}
					isExecuting={isExecuting}
					setIsExecuting={setIsExecuting}
				/>
			</div>
			<CodeEditor username="User1" roomId="Room1" code={code} setCode={setCode} />
		</div>
	);
};

export default Editor;
