import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default function MessageInput() {
	return (
		<div className="message-input flex row">
			<InputText className="flex-grow-1"></InputText>
			<Button label="Send it!"></Button>
		</div>
	)
}