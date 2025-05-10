import useCodeContext from "../context/CodeContext";

export const handleRunCode = async (
	selectedLang: string,
	code: string,
	input: string,
	setErr,
	setOutput,
	setIsExecuting
) => {
	try {
		setIsExecuting(true);
		const res = await fetch("https://coderunner-h22r.onrender.com/run", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				language: selectedLang,
				code: code,
				inputData: input,
			}),
		});

		if (!res.ok) {
			throw new Error(`Error: ${res.status} ${res.statusText}`);
		}

		const data = await res.json();
		console.log("Response:", data);
		setOutput(data?.output);
		setErr(data?.error);
	} catch (error) {
		console.error("Request failed:", error);
	} finally {
		setIsExecuting(false);
	}
};
