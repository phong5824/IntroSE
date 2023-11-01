import React, { useEffect, useState } from "react";

export default function Chat() {
  const [collapsed, setCollapsed] = useState(true); // [true, function() {}
  const [chat, setChat] = useState([]); // [ { sender: "user", message: "hi" }, { sender: "bot", message: "hello" }
  // const [message, setMessage] = useState([]);
  const getMessage = useEffect(() => {
    axios.get("/api/chat").then((res) => {
      setChat(res.data);
    });
  }, []);

  const handleSend = (e) => {
    const messageData = {
      sender: "user",
      message: message,
    };
    // if(send)
  };

  //   .then((res) => res.json())
  //     .then((data) => {
  //       setChat(data);
  //     });
  // }, []);
  const onSend = (e) => {
    e.preventDefault();
    const messageData = {
      sender: "user",
      message: message,
    };
    axios.post("/api/chat", messageData).then((res) => {
      setChat(res.data);
    });
  };
  return (
    <div className="chat-component">
      <div className="chat-card w-[200px] h-[300px]">
        <div className="chat-header">chatbot-header</div>
        <div className="chat-container">
          {chat.map((message) => {
            return (
              <div className="chat-message">
                <div className="chat-sender">{message.sender}</div>
                <div className="chat-message">{message.message}</div>
              </div>
            );
          })}
        </div>
        <div className="chat-form">
          <input type="text" onChange={(e) => setMessage(e.target.value)} />
          <button type="submit" onSubmit={onSend}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
