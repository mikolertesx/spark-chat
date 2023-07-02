import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default function MessageInput() {
	return (
		<div className="message-input flex border-round-lg px-6 py-5 surface-50 shadow-5">
			<InputText
				className="flex-grow-1 border-round-2xl"
			/>
			<Button
				label="Send it!"
				className="border-round-2xl"
			/>
		</div>
	)
}