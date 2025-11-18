
import React, { useContext } from 'react';
import { AppContext, AppContextType } from '../contexts/AppContext';
import Icon from './Icon';

interface UpgradeModalProps {
  onClose: () => void;
}

const UpgradeModal: React.FC<UpgradeModalProps> = ({ onClose }) => {
  const { setIsPaidUser } = useContext(AppContext) as AppContextType;

  const handleUpgrade = () => {
    setIsPaidUser(true);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md relative animate-fade-in-up">
        <button onClick={onClose} className="absolute top-3 right-3 text-slate-400 hover:text-slate-600">
          <Icon name="close" className="w-6 h-6" />
        </button>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-brand-text mb-2">Unlock Everything</h2>
          <p className="text-brand-text-light mb-6">Upgrade to get instant access to all scripts, scenarios, and tools.</p>
        </div>
        <ul className="space-y-3 mb-8 text-left">
          <li className="flex items-start">
            <Icon name="check" className="w-5 h-5 text-brand-teal mr-3 mt-1 flex-shrink-0" />
            <span className="text-brand-text">All 10+ conversation scenarios</span>
          </li>
          <li className="flex items-start">
            <Icon name="check" className="w-5 h-5 text-brand-teal mr-3 mt-1 flex-shrink-0" />
            <span className="text-brand-text">Full script library with 100+ lines</span>
          </li>
          <li className="flex items-start">
            <Icon name="check" className="w-5 h-5 text-brand-teal mr-3 mt-1 flex-shrink-0" />
            <span className="text-brand-text">All meeting templates and export tools</span>
          </li>
           <li className="flex items-start">
            <Icon name="check" className="w-5 h-5 text-brand-teal mr-3 mt-1 flex-shrink-0" />
            <span className="text-brand-text">Advanced boundary-setting library</span>
          </li>
        </ul>
        <button
          onClick={handleUpgrade}
          className="w-full bg-brand-teal text-white font-bold py-3 px-4 rounded-lg hover:bg-brand-teal-dark transition-colors duration-200"
        >
          Upgrade Now (£4.99 one-off)
        </button>
      </div>
    </div>
  );
};

export default UpgradeModal;
