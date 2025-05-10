import React from "react";
import { handleRunCode } from "../../hooks/codeRunner";

interface RunButtonProps {
	selectedLang: string;
	code: string;
	input: string;
	setErr: (err: string) => void;
	setOutput: (output: string) => void;
	isExecuting: boolean;
	setIsExecuting: (isExecuting: boolean) => void;
}

const RunButton: React.FC<RunButtonProps> = ({
	selectedLang,
	code,
	input,
	setErr,
	setOutput,
	isExecuting,
	setIsExecuting,
}) => {
	return (
		<button
			onClick={() => handleRunCode(selectedLang, code, input, setErr, setOutput, setIsExecuting)}
			disabled={isExecuting}
			className="bg-green-500 w-24 p-1 rounded-md text-white font-bold cursor-pointer"
		>
			{isExecuting ? "Running" : "Run"}
		</button>
	);
};

export default RunButton;
