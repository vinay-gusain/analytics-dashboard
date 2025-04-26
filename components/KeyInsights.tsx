export default function KeyInsights() {
    const salesGrowth = 10;
    
    return (
      <div>
        <h2 className="text-lg font-medium mb-4">Key Insights & Feedback</h2>
        
        <div className="flex items-center">
          <div className="flex-1">
            <div className="text-5xl font-semibold">{salesGrowth}%</div>
            <div className="text-sm text-gray-600 mt-1">Sales Growth</div>
          </div>
          <div className="flex-1 flex justify-end">
            <div className="flex flex-col items-center">
              <div className="rounded-full p-2 bg-blue-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="mt-2 text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                Top Performer
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="font-medium mb-3">Feedback</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-start">
              <div className="w-2 h-2 mt-1 rounded-full bg-gray-400 flex-shrink-0"></div>
              <p className="ml-2 text-sm text-gray-600">
                Franchisees are requesting more detailed training materials.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }