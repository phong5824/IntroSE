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



import { useState, useEffect, useRef } from 'react';
import Chatbot from '../assets/chatbot.png';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isChatVisible, setIsChatVisible] = useState(false);

  const handleToggleChat = () => {
    setIsChatVisible(!isChatVisible);
  };

  const messagesContainerRef = useRef(null);


  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;

    setMessages([...messages, { text: inputMessage, sender: 'user' }]);

    try {
      // Gửi tin nhắn đến API ChatBot và nhận câu trả lời
      const response = await fetch('https://api.example.com/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputMessage }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessages([...messages, { text: data.message, sender: 'bot' }]);
      } else {
        console.error('Failed to get response from the chatbot API');
      }
    } catch (error) {
      console.error('Error sending message to the chatbot API:', error);
    }

    setInputMessage('');
  };

  useEffect(() => {
    if (messages.length === 0) {
      // Gửi tin nhắn mặc định từ bot khi messages rỗng
      setMessages([{ text: 'Chào bạn, bạn cần mình giúp gì?', sender: 'bot' }]);
    }

    setInputMessage('');
  }, [messages]);

  useEffect(() => {
    if (messagesContainerRef.current) {
      // Cuộn xuống phần tử cuối cùng khi danh sách tin nhắn thay đổi
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (isChatVisible) {
      // Nếu đang mở chat, cuộn xuống phần tử cuối cùng
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [isChatVisible]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chat-component fixed bottom-10 right-10 z-50">
      <div className="flex justify-center items-center">
        <img
          src={Chatbot}
          alt="Chatbot Trigger"
          className="chatbot-trigger w-16 h-16 cursor-pointer"
          onClick={handleToggleChat}
        />
      </div>
      {isChatVisible && (
        <div className="chat-card bg-white p-4 rounded-md w-80 shadow">
          <div
            ref={messagesContainerRef}
            className="messages-container mb-4 h-64 w-72 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'
                  }`}
              >
                <span
                  className={`inline-block p-2 rounded-md ${message.sender === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-300 text-black'
                    }`}
                >
                  {message.text}
                </span>
              </div>
            ))}
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Nhập tại đây..."
              className="flex-1 p-2 border rounded-md"
            />
            <button
              onClick={handleSendMessage}
              className="bg-red-400 text-white p-2 rounded-md"
            >
              Gửi
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;



