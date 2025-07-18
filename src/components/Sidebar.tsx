import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { Home, Shield, Smartphone, ShoppingBag } from 'lucide-react';

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  
  const navItems = [
    {
      href: '/',
      label: 'الرئيسية',
      icon: Home,
      description: 'الصفحة الرئيسية'
    },
    {
      href: '/admin-panel',
      label: 'لوحة الإدارة',
      icon: Shield,
      description: 'إدارة النظام'
    },
    {
      href: '/android-app',
      label: 'تطبيق الأندرويد',
      icon: Smartphone,
      description: 'التطبيق المحمول'
    }
  ];

  return (
    <div className="w-64 bg-white shadow-xl border-r border-gray-200 h-full flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
            <ShoppingBag className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">My Market</h2>
            <p className="text-sm text-gray-500">منصة التجارة الإلكترونية</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <li key={item.href}>
                <Link 
                  href={item.href}
                  className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 border border-blue-200' 
                      : 'hover:bg-gray-50 text-gray-700 hover:text-gray-900'
                  }`}
                >
                  <div className={`p-2 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                      : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className={`font-medium ${isActive ? 'text-blue-600' : 'text-gray-900'}`}>
                      {item.label}
                    </div>
                    <div className="text-xs text-gray-500">
                      {item.description}
                    </div>
                  </div>
                  {isActive && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="text-center">
          <p className="text-sm text-gray-500">© 2024 My Market</p>
          <p className="text-xs text-gray-400 mt-1">جميع الحقوق محفوظة</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 