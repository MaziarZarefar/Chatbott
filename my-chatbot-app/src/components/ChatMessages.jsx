const ChatMessages = ({ messages }) => {
  return (
    <div className="h-64 overflow-y-auto mb-4">
      {messages.map((msg, index) => (
        <div key={index} className={`p-2 my-1 rounded ${msg.sender === 'user' ? 'bg-blue-200 text-right' : 'bg-gray-200 text-left'}`}>
          {msg.text}
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
