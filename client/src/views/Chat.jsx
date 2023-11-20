// import { useEffect, useState } from "react";

// export default function Chat() {
//   const [collapsed, setCollapsed] = useState(true); // [true, function() {}
//   const [chat, setChat] = useState([]); // [ { sender: "user", message: "hi" }, { sender: "bot", message: "hello" }
//   // const [message, setMessage] = useState([]);
//   const getMessage = useEffect(() => {
//     axios.get("/api/chat").then((res) => {
//       setChat(res.data);
//     });
//   }, []);

//   const handleSend = (e) => {
//     const messageData = {
//       sender: "user",
//       message: message,
//     };
//     // if(send)
//   };

//   //   .then((res) => res.json())
//   //     .then((data) => {
//   //       setChat(data);
//   //     });
//   // }, []);
//   const onSend = (e) => {
//     e.preventDefault();
//     const messageData = {
//       sender: "user",
//       message: message,
//     };
//     axios.post("/api/chat", messageData).then((res) => {
//       setChat(res.data);
//     });
//   };
//   return (
//     <div className="chat-component">
//       <div className="chat-card w-[200px] h-[300px]">
//         <div className="chat-header">chatbot-header</div>
//         <div className="chat-container">
//           {chat.map((message) => {
//             return (
//               <div className="chat-message">
//                 <div className="chat-sender">{message.sender}</div>
//                 <div className="chat-message">{message.message}</div>
//               </div>
//             );
//           })}
//         </div>
//         <div className="chat-form">
//           <input type="text" onChange={(e) => setMessage(e.target.value)} />
//           <button type="submit" onSubmit={onSend}>
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import axios from "axios";
import Chatbot from '../assets/chatbot.png';

const Chat = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState("");

  const toggleChat = () => {
    setCollapsed(!collapsed);
  };


  const onSend = (e) => {
    e.preventDefault();
    const messageData = {
      sender: "user",
      message: message,
    };
    axios.post("/api/chat", messageData).then((res) => {
      setChat(res.data);
      setMessage("");
    });
  };

  return (
    <div className={`chat-component ${collapsed ? "collapsed" : ""} fixed bottom-10 right-10 z-50`}>
      <div className="chat-card flex flex-col items-center justify-center">
        <img
          src={Chatbot}
          alt="Chatbot Trigger"
          className="chatbot-trigger w-16 h-16 cursor-pointer mb-1 mr-3"
          onClick={toggleChat}
        />

        {/* Chat container */}
        <div className="chat-container flex flex-col items-center">
          {chat.map((message, index) => (
            <div key={index} className={`chat-message ${message.sender} mb-2`}>
              <div className="chat-message">{message.message}</div>
            </div>
          ))}
        </div>

        {/* Chat form */}
        {!collapsed && (
          <div className="chat-form bg-green-400 rounded-lg p-4 w-96">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Bạn cần tôi giúp gì?"
              className="w-full p-2 rounded mb-3 text-center"
            />
            <div className="flex items-center justify-center">
              <button
                type="button"
                onClick={onSend}
                className="bg-red-400 text-white rounded-full p-2 w-32"
              >
                Gửi
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Chat;

