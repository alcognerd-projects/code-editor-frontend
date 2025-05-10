import { useContext, createContext, useState, ReactNode } from "react";

interface CodeContextType {
	input: string;
	setInput: (input: string) => void;
	output: string;
	setOutput: (output: string) => void;
	err: string;
	setErr: (err: string) => void;
	isExecuting: boolean;
	setIsExecuting: (isExecuting: boolean) => void;
	selectedLang: string;
	setSelectedLang: (selectedLang: string) => void;
}

const CodeContext = createContext<CodeContextType | undefined>(undefined);

export const CodeContextProvider = ({ children }: { children: ReactNode }) => {
	const [input, setInput] = useState<string>("");
	const [output, setOutput] = useState<string>("");
	const [err, setErr] = useState<string>("");
	const [isExecuting, setIsExecuting] = useState<boolean>(false);
	const [selectedLang, setSelectedLang] = useState<string>("python");
	const codeContextValue = {
		input,
		output,
		err,
		isExecuting,
		setInput,
		setOutput,
		setErr,
		setIsExecuting,
		selectedLang,
		setSelectedLang,
	};
	return <CodeContext.Provider value={codeContextValue}>{children}</CodeContext.Provider>;
};

const useCodeContext = () => {
	const context = useContext(CodeContext);
	if (!context) {
		throw new Error("useCodeContext must be used within a CodeContextProvider");
	}
	return context;
};

export default useCodeContext;
