import { useState } from "react";
import Image from "next/image";

export default function PendingQuestions() {
  const [expanded, setExpanded] = useState(true);

  const questions = [
    {
      id: 1,
      user: {
        name: "Phoenix Baker",
        username: "@phoenix",
        avatar: "/placeholder/man.png",
      },
      question: "What are the requirements for opening a new store?",
      time: "5min ago",
    },
    {
      id: 2,
      user: {
        name: "Koray Okumus",
        username: "@koray",
        avatar: "/placeholder/woman.png",
      },
      question: "How do I manage inventory effectively?",
      time: "4hr ago",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 flex items-center justify-between border-b">
        <div className="flex items-center">
          <h2 className="text-lg font-medium">Pending Questions</h2>
          <div className="ml-3 px-2 py-1 bg-blue-500 text-white text-xs rounded-md">
            02
          </div>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-gray-400 hover:text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transform ${
              expanded ? "rotate-180" : ""
            } transition-transform duration-200`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {expanded && (
        <div className="p-6 space-y-6">
          {questions.map((question) => (
            <div key={question.id} className="flex">
              <div className="mr-4 flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={question.user.avatar}
                    alt={question.user.name}
                    width={40}
                    height={40}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center">
                    <div className="font-medium">{question.user.name}</div>
                    <div className="ml-2 text-sm text-gray-500">
                      {question.user.username}
                    </div>
                    <div className="ml-auto text-sm text-gray-500">
                      {question.time}
                    </div>
                  </div>
                  <div className="mt-2 text-gray-700">{question.question}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
