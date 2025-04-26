import { useState, useEffect } from 'react';

export default function AccountProgress() {
  const [progress, setProgress] = useState(0);
  const finalProgress = 85;
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(finalProgress);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  
  // Calculate the circumference
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  
  return (
    <div>
      <h2 className="text-lg font-medium text-center mb-6">Account Progress</h2>
      <div className="flex justify-center">
        <div className="relative">
          <svg className="w-44 h-44" viewBox="0 0 180 180">
            <circle 
              cx="90" 
              cy="90" 
              r={radius} 
              fill="none" 
              stroke="#e6e6e6" 
              strokeWidth="16"
            />
            <circle 
              cx="90" 
              cy="90" 
              r={radius} 
              fill="none" 
              stroke="#2da7db" 
              strokeWidth="16" 
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              transform="rotate(-90 90 90)"
              style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
            />
            <text 
              x="90" 
              y="90" 
              dominantBaseline="middle" 
              textAnchor="middle" 
              fontSize="36" 
              fontWeight="bold"
              fill="#333"
            >
              {progress}%
            </text>
          </svg>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="font-medium mb-4">Steps Completed</h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <span className="ml-3 text-sm">Profile Setup</span>
            <div className="ml-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <span className="ml-3 text-sm">Initial Training</span>
            <div className="ml-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <span className="ml-3 text-sm">Legal Documents</span>
            <div className="ml-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="font-medium mb-4">Steps Remaining</h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-green-200"></div>
            </div>
            <span className="ml-3 text-sm">Financial Integration</span>
            <div className="ml-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-200" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-green-200"></div>
            </div>
            <span className="ml-3 text-sm">Final Review</span>
            <div className="ml-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-200" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}