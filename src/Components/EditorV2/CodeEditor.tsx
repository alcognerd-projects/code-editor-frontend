import React, { useEffect, useRef, useState } from "react";
import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";
import { EditorView } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { yCollab } from "y-codemirror.next";
import { oneDark } from "@codemirror/theme-one-dark";
import { basicSetup } from "codemirror";
import { keymap } from "@codemirror/view";
import { indentWithTab } from "@codemirror/commands";
import useCodeContext from "../../context/CodeContext";
import { java } from "@codemirror/lang-java";
import { useSocket } from "../../context/SocketContext";
interface CodeEditorProps {
	username: string;
	roomId: string;
	// code: string;
	// setCode: (code: string) => void;
	// socket?: any; // Add socket.io type if needed
}

const CodeEditor: React.FC<CodeEditorProps> = ({ username, roomId }) => {
	const { selectedLang } = useCodeContext();
	const editorRef = useRef<HTMLDivElement | null>(null);
	const viewRef = useRef<EditorView | null>(null);
	const ydoc = useRef(new Y.Doc());
	const { socket } = useSocket();

	//inserted code
	const [lang, setLang] = useState(() => java());
	const [code, setCode] = useState(
		`// class name should be Main
    public class Main {
        public static void main(String[] args) {
                System.out.println("Hello, Java!");
             }
    }`
	);
	//inserted code ends

	useEffect(() => {
		if (!editorRef.current) return;

		if (viewRef.current) {
			viewRef.current.destroy();
		}

		const ytext = ydoc.current.getText("codemirror");

		const wsProvider = new WebsocketProvider(
			"http://localhost:1234", // Change to your Y.js WebSocket server URL
			roomId,
			ydoc.current
		);

		const awareness = wsProvider.awareness;
		awareness.setLocalStateField("user", {
			name: username,
			color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
		});

		const cursorTracker = EditorView.updateListener.of((update) => {
			if (update.selectionSet && socket) {
				const selection = update.state.selection.main;
				socket.emit("cursorPosition", {
					username,
					position: selection.head,
					anchor: selection.anchor,
					roomId,
				});
			}
		});

		const state = EditorState.create({
			doc: code,
			extensions: [
				basicSetup,
				oneDark,
				lang,
				yCollab(ytext, awareness),
				keymap.of([indentWithTab]),
				cursorTracker,
				EditorView.updateListener.of((update) => {
					if (update.docChanged) {
						setCode(update.state.doc.toString());
					}
				}),
			],
		});

		const view = new EditorView({
			state,
			parent: editorRef.current,
		});

		viewRef.current = view;

		return () => {
			view.destroy();
			wsProvider.disconnect();
			ydoc.current.destroy();
		};
	}, [selectedLang, roomId, username, socket]);

	return <div ref={editorRef} className="h-full w-full bg-[#282c34] rounded-md text-lg"></div>;
};

export default CodeEditor;
