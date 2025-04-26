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

export default function Sidebar() {
  return (
    <div className="w-60 bg-teal-900 text-white flex flex-col h-screen sticky top-0">
      <div className="flex-1">
        <nav className="mt-5 px-2">
          <ul>
            {menuItems.map((item) => (
              <li key={item.name} className="mt-1">
                <Link
                  href={item.href}
                  className={`flex items-center px-4 py-3 text-sm rounded-md ${
                    item.active ? 'bg-teal-800' : 'hover:bg-teal-800'
                  }`}
                >
                  {item.name}
                  {item.badge && (
                    <span className="ml-auto bg-white text-teal-900 text-xs font-medium px-2 py-0.5 rounded">
                      {item.badge}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="p-4">
        <button className="w-full text-left px-4 py-2 text-sm hover:bg-teal-800 rounded-md">
          Logout
        </button>
      </div>
    </div>
  );
}