import { useState } from "react";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useState } from "react";

export default function MessageInput(props) {
	const [message, setMessage] = useState('')

	return (
		<div className="message-input flex border-round-lg px-6 py-5 surface-50 shadow-5">
			<InputText
				value={message}
				placeholder="Start typing away!"
				className="flex-grow-1 border-round-2xl mr-3"
				onChange={(e) => {
					console.log(e)
					setMessage(e.target.value)
				}}
			/>
			<Button
				label="Send it!"
				className="border-round-2xl"
				onClick={() => {
					props.onSend(message)
					setMessage('')
				}}
			/>
		</div>
	)
}
