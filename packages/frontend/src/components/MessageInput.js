import { useState } from "react";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { socket } from "@/util/connectToSocket";

export default function MessageInput() {
  const [message, setMessage] = useState("");

  // TODO: Change placeholder
  const sendMessage = () => {
    socket.emit("send-message", message);
  };

  return (
    <div className="message-input flex border-round-lg px-6 py-5 surface-50 shadow-5">
      <InputText
        className="flex-grow-1 border-round-2xl"
        value={message}
        onChange={(value) => setMessage(value.target.value)}
      />
      <Button
        label="Send it!"
        className="border-round-2xl"
        onClick={sendMessage}
      />
    </div>
  );
}
