export default function FinancialWellbeing() {
    const totalFranchisees = 20;
    const growthPercentage = 2.1;
    const targetAmount = 500000;
    const currentAmount = 450000;
    
    // Format numbers with commas
    const formatCurrency = (amount: number) => {
      return '$' + amount.toLocaleString();
    }
    
    return (
      <div>
        <h2 className="text-lg font-medium mb-4">Financial Wellbeing</h2>
        
        <div className="flex items-center">
          <div className="text-5xl font-semibold mr-4">{totalFranchisees}</div>
          <div className="bg-green-100 text-green-700 text-xs rounded-full px-2 py-1 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            {growthPercentage}%
          </div>
        </div>
        <div className="text-sm text-gray-600 mt-1">Total Franchisees</div>
        
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600 mb-2">Target</div>
            <div className="text-xl font-medium">{formatCurrency(targetAmount)}</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600 mb-2">Current</div>
            <div className="text-xl font-medium">{formatCurrency(currentAmount)}</div>
          </div>
        </div>
      </div>
    )
  }