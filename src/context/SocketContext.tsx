import { createContext, useContext, useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";

const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
	const [socket, setSocket] = useState<Socket | null>(null);
	if (socket != null) {
		socket.on("welcome", (data) => {
			console.log(data);
		});
	}
	useEffect(() => {
		const socket = io("ws://localhost:5000");
		setSocket(socket);
		return () => socket.disconnect();
	}, []);

	return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>;
};

export const useSocket = () => {
	return useContext(SocketContext);
};
