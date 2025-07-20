import React, { useState } from 'react';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed bottom-5 right-5">
            <button 
                onClick={toggleChat} 
                className="bg-red-600 text-white p-3 rounded-full shadow-lg focus:outline-none"
            >
                Chat
            </button>
            {isOpen && (
                <div className="bg-white shadow-lg rounded-lg p-4 mt-2 w-80">
                    <h2 className="text-lg font-bold">Chat with us!</h2>
                    <div className="mt-2">
                        <p>How can we help you today?</p>
                        <textarea 
                            className="w-full border rounded p-2 mt-2" 
                            rows="4" 
                            placeholder="Type your message here..."
                        />
                        <button 
                            className="bg-red-600 text-white mt-2 p-2 rounded"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatWidget;