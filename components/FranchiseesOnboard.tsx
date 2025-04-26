import Image from 'next/image';

export default function FranchiseesOnboard() {
  const franchiseesCount = 14;
  const growthPercentage = 7.4;
  
  const stages = [
    { id: 1, name: 'Stage 1 (Initial Inquiry)', color: '#1876a4', count: 2 },
    { id: 2, name: 'Stage 2 (Document Submission)', color: '#41b2e5', count: 7 },
    { id: 3, name: 'Stage 3 (Training)', color: '#b3e3fa', count: 5 },
  ];
  
  // Calculate percentages for progress bars
  const totalCount = stages.reduce((acc, stage) => acc + stage.count, 0);
  const getWidth = (count: number) => Math.round((count / totalCount) * 100);
  
  return (
    <div>
      <h2 className="text-lg font-medium mb-4">Total Franchisees Onboard</h2>
      
      <div className="flex items-center">
        <div className="text-5xl font-semibold mr-4">{franchiseesCount}</div>
        <div className="bg-green-100 text-green-700 text-xs rounded-full px-2 py-1 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          {growthPercentage}%
        </div>
        <div className="ml-auto flex -space-x-1">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="w-6 h-6 rounded-full border-2 border-white overflow-hidden">
              <Image 
                src="/placeholder/man.png"
                alt={`Franchisee ${index + 1}`}
                width={26}
                height={26}
              />
            </div>
          ))}
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-xs font-medium">
            +7
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <div className="flex rounded-full h-3 overflow-hidden">
          {stages.map((stage) => (
            <div 
              key={stage.id} 
              className="h-full" 
              style={{ 
                backgroundColor: stage.color,
                width: `${getWidth(stage.count)}%` 
              }}
            ></div>
          ))}
        </div>
        
        <div className="mt-6 space-y-4">
          {stages.map((stage) => (
            <div key={stage.id} className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: stage.color }}
              ></div>
              <span className="ml-2 text-sm">{stage.name}</span>
              <div className="ml-auto font-medium">{stage.count.toString().padStart(2, '0')}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}