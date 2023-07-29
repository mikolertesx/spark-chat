import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useState } from "react";

export default function MessageInput(props) {
	const [message, setMessage] = useState('')

	return (
		<div className="message-input flex justify-content-center border-round-lg border-noround-top px-6 py-5">

			<InputText
				value={message}
				placeholder="Start typing away!"
				className="flex-grow-1 border-round-3xl mr-3"
				onChange={(e) => {
					console.log(e)
					setMessage(e.target.value)
				}}
			/>

			<Button
				label="Send it!"
				className="border-round-3xl"
				onClick={() => {
					props.onSend(message)
					setMessage('')
				}}
			/>
		</div>
	)
}