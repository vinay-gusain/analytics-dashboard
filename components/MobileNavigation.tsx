// Mobile navigation for small screens
import { useState } from 'react';
import Link from 'next/link';

const menuItems = [
  { name: 'Home', href: '/', active: true },
  { name: 'Stages & Checklist', href: '/stages' },
  { name: 'Upload Docs', href: '/upload' },
  { name: 'Preferred Vendors', href: '/vendors' },
  { name: 'Tech Stack', href: '/tech' },
  { name: 'Targets', href: '/targets' },
  { name: 'Zee Sales Targets', href: '/zee-targets' },
  { name: 'MAI Settings', href: '/settings' },
  { name: 'Pending Questions', href: '/questions', badge: '3' },
];

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md text-gray-500 hover:bg-teal-800 hover:text-white focus:outline-none"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute top-14 left-0 right-0 bg-teal-900 p-4 shadow-md z-50 animate-fadeIn">
          <nav className="grid gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-3 py-2 text-sm rounded-md text-white ${
                  item.active ? 'bg-teal-800' : 'hover:bg-teal-800'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
                {item.badge && (
                  <span className="ml-auto bg-white text-teal-900 text-xs font-medium px-2 py-0.5 rounded">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}