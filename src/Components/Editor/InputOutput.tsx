import { useState } from "react";
import useCodeContext from "../../context/CodeContext";
import { handleRunCode } from "../../hooks/codeRunner";

const InputOutput = () => {
	const [value, setValue] = useState("");
	const { output, err, setInput } = useCodeContext();
	const handleChange = (e) => {
		setValue(e.target.value);
		setInput(e.target.value); // Update the parent state
	};

	return (
		<div className="h-[25%] flex flex-col px-2 text-white">
			<div className="w-full flex justify-around gap-3">
				<p className="w-1/2 px-2">Input</p>
				<p className="w-1/2 px-2">Output</p>
			</div>
			<div className="h-full w-full flex gap-3">
				<textarea
					value={value}
					onChange={handleChange}
					className="bg-gray-900 max-h-[150px] min-h-[150px] w-1/2 font-medium focus:ring-0 focus:outline-none rounded-xl border-2 border-violet-300 p-2 font-mono"
				/>
				<textarea
					value={err ? err : output}
					readOnly
					className={`font-medium bg-gray-900 max-h-[150px] min-h-[150px] w-1/2 focus:ring-0 focus:outline-none rounded-xl border-2 border-violet-300 p-3 overflow-y-auto font-mono ${
						err ? "text-red-400" : "text-green-400"
					}`}
				/>
			</div>
		</div>
	);
};

export default InputOutput;
