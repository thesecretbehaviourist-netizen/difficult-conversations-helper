import React from 'react';
import { Scenario } from '../types';

interface ScenarioCardProps {
  scenario: Scenario;
  onClick: (id: string) => void;
}

const ScenarioCard: React.FC<ScenarioCardProps> = ({ scenario, onClick }) => {
  const handleClick = () => {
    onClick(scenario.id);
  };

  return (
    <button
      onClick={handleClick}
      className="w-full p-6 text-left bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-between cursor-pointer"
    >
      <span className="text-lg font-semibold text-brand-text">{scenario.title}</span>
    </button>
  );
};

export default ScenarioCard;