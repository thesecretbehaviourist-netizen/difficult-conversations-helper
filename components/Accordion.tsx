
import React, { useState } from 'react';
import Icon from './Icon';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left font-semibold"
      >
        <span>{title}</span>
        <Icon name={isOpen ? 'chevron-up' : 'chevron-down'} className="w-5 h-5 text-brand-teal" />
      </button>
      {isOpen && (
        <div className="p-4 border-t border-slate-100 text-brand-text-light">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
