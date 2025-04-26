import { useState } from 'react';
import Image from 'next/image';

export default function ChatAssistant() {
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle the message submission
      setMessage('');
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center h-full">
      {/* Logo centered on first line - using generative.png */}
      <div className="mb-4 flex justify-center">
        <Image 
          src="/placeholder/generative.png" 
          alt="Generative AI logo" 
          width={64} 
          height={64}
          // Add fallback in case image fails to load
        />
      </div>
      
      {/* Text centered on second line */}
      <h2 className="text-2xl font-medium mb-6 text-center">Welcome to the AI Chat Assistant</h2>
      
      {/* Input form centered on third line */}
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask your question here.."
            className="flex-1 py-3 px-4 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="px-4 bg-gray-100 border border-l-0 border-gray-300 rounded-r-lg hover:bg-gray-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  )
}