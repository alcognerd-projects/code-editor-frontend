import { useState } from "react";
import Editor from "../Components/Editor/Editor";
import InputOutput from "../Components/Editor/InputOutput";
import Prensenting from "../Components/Editor/Prensenting";
import Userlist from "../Components/Editor/Userlist";
import Button from "../Components/Ui/Button";

const CodeEditor = () => {
	return (
		<div className="h-full w-full flex justify-around items-center gap-1 p-2 ">
			<div className="h-full w-full ">
				<Prensenting />
				<Editor />
				<InputOutput />
			</div>
			<div className="h-full w-[28%] flex flex-col justify-between ">
				<div className="w-full flex flex-row-reverse ">
					<Button name="Leave" className="h-10 w-20 bg-red-400 rounded-md cursor-pointer" />
				</div>
				<Userlist />
			</div>
		</div>
	);
};

export default CodeEditor;
