
import React from 'react';
import { SCENARIOS } from '../data';
import ScenarioCard from '../components/ScenarioCard';

interface HomePageProps {
  openScenario: (id: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ openScenario }) => {
  return (
    <div className="p-4">
      <header className="text-center my-6">
        <h1 className="text-2xl font-bold text-brand-text">The Secret Behaviourist</h1>
        <h2 className="text-3xl font-bold text-brand-teal mt-1">Difficult Conversations Helper</h2>
        <p className="mt-4 text-brand-text-light max-w-2xl mx-auto">Instant, trauma-informed support for tough parent conversations. Zero jargon, zero clichés.</p>
      </header>
      
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold text-center mb-4 text-brand-text">What's happening right now?</h3>
        <div className="space-y-4">
          {SCENARIOS.map((scenario) => (
            <ScenarioCard key={scenario.id} scenario={scenario} onClick={openScenario} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
