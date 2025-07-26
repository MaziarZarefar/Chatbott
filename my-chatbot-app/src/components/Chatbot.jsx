import { useState } from 'react';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = (msg) => {
    if (!msg) return;
    setMessages((prev) => [...prev, { sender: 'user', text: msg }]);

    // پاسخ فرضی ربات
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: 'bot', text: 'پاسخ ربات به: ' + msg }]);
    }, 500);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-4">
      <ChatMessages messages={messages} />
      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default Chatbot;
