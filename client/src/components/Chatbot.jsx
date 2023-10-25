import React, { useState } from "react";

export default function Chatbot() {
  const [message, setMessage] = useState([]);
  const onSend = (e) => {
    e.preventDefault();
    const msgData = {
      message: message,
    };
  };
  return (
    <div className="chatbot-component">
      <div className="chatbot-card"></div>
      <div className="chatbot-form">
        <input type="text" onChange={(e) => setMessage(e.target.value)} />
        <button type="submit" onSubmit={onSend}>
          Send
        </button>
      </div>
    </div>
  );
}
