"use client";

import { useEffect, useState } from "react";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

// icons
import "primeicons/primeicons.css";

// our components
import ChatsList from "../components/ChatsList";
import MessagingPanel from "../components/MessagingPanel";

export default function Home() {
	const [selectedChat, setSelectedChat] = useState(
		"Choose a friend to get started!"
	);

	useEffect(() => {
		const getData = async () => {
			const data = await fetch("http://localhost:8000/");
			const jsonResponse = await data.json();
			console.log(jsonResponse);
		};

		getData();
	}, []);

	return (
		<div className="flex w-screen h-screen overflow-x-hidden">
			<ChatsList onChatSelect={setSelectedChat} />
			<MessagingPanel selectedFriend={selectedChat} />
		</div>
	);
}
