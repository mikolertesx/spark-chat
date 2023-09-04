import { useState } from "react";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default function MessageInput(props) {
	const [message, setMessage] = useState('')

	return (
		<div className="message-input flex justify-content-center border-round-lg border-noround-top py-4">
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
			/>
		</div>
	)
}
