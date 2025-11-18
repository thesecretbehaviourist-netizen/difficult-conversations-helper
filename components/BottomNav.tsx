
import React from 'react';
import { Page } from '../contexts/AppContext';
import Icon from './Icon';

interface BottomNavProps {
  currentPage: Page;
  navigateTo: (page: Page) => void;
}

interface NavItem {
    page: Page;
    label: string;
    icon: 'home' | 'library' | 'templates' | 'redflags' | 'tools';
}

const NAV_ITEMS: NavItem[] = [
  { page: 'home', label: 'Home', icon: 'home' },
  { page: 'library', label: 'Scripts', icon: 'library' },
  { page: 'templates', label: 'Templates', icon: 'templates' },
  { page: 'redflags', label: 'Red Flags', icon: 'redflags' },
  { page: 'tools', label: 'Tools', icon: 'tools' },
];

const BottomNav: React.FC<BottomNavProps> = ({ currentPage, navigateTo }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-lg z-50">
      <div className="flex justify-around max-w-lg mx-auto">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.page}
            onClick={() => navigateTo(item.page)}
            className={`flex flex-col items-center justify-center w-full pt-2 pb-1 text-xs transition-colors duration-200 ${
              currentPage === item.page ? 'text-brand-teal' : 'text-slate-500 hover:text-brand-teal'
            }`}
          >
            <Icon name={item.icon} className="w-6 h-6 mb-1" />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
