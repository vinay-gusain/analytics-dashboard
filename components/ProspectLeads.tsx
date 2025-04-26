import Image from 'next/image';

export default function ProspectLeads() {
  const prospects = [
    { id: 1, name: 'Wade Warren', stage: 'Initial Inquiry', avatar: '/placeholder/man.png' },
    { id: 2, name: 'Ava Wright', stage: 'Initial Inquiry', avatar: '/placeholder/woman.png' },
    { id: 3, name: 'Cody Fisher', stage: 'Initial Inquiry', avatar: '/placeholder/man.png' },
  ];
  
  return (
    <div>
      <h2 className="text-lg font-medium mb-6">Prospect Leads</h2>
      
      <div className="space-y-4">
        {prospects.map((prospect) => (
          <div key={prospect.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image 
                src={prospect.avatar}
                alt={prospect.name}
                width={40}
                height={40}
              />
            </div>
            <div className="ml-4">
              <div className="font-medium">{prospect.name}</div>
            </div>
            <div className="ml-auto">
              <div className="text-sm text-gray-600">Stage: {prospect.stage}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}