
import React from 'react';

interface SayThisInsteadProps {
  instead: string;
  of: string;
}

const SayThisInstead: React.FC<SayThisInsteadProps> = ({ instead, of }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-sm font-bold text-red-700 mb-2">Instead of this...</p>
        <p className="text-red-900 line-through">{of}</p>
      </div>
      <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg">
        <p className="text-sm font-bold text-brand-teal-dark mb-2">Try saying this...</p>
        <p className="text-brand-text font-semibold">{instead}</p>
      </div>
    </div>
  );
};

export default SayThisInstead;
