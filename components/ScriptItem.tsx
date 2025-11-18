import React, { useContext, useState, useEffect } from 'react';
import { Script } from '../types';
import { AppContext, AppContextType } from '../contexts/AppContext';
import Icon from './Icon';

interface ScriptItemProps {
  script: Script;
}

const ScriptItem: React.FC<ScriptItemProps> = ({ script }) => {
  const { favorites, toggleFavorite } = useContext(AppContext) as AppContextType;
  const [copied, setCopied] = useState(false);
  const isFavorite = favorites.includes(script.id);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(script.text);
    setCopied(true);
  };

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(script.id);
  };

  return (
    <div
      className="bg-white p-4 rounded-lg shadow-sm flex items-start justify-between gap-2"
    >
      <p className="flex-grow text-brand-text-light">{script.text}</p>
      <div className="flex items-center space-x-2 flex-shrink-0">
        <button onClick={handleCopy} className="text-slate-400 hover:text-brand-teal transition-colors">
          {copied ? <Icon name="check" className="w-5 h-5 text-green-500" /> : <Icon name="copy" className="w-5 h-5" />}
        </button>
        <button onClick={handleFavorite} className={`transition-colors ${isFavorite ? 'text-yellow-500 hover:text-yellow-600' : 'text-slate-400 hover:text-yellow-500'}`}>
          <Icon name={isFavorite ? 'star-filled' : 'star'} className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ScriptItem;