
import React from 'react';
import { SCENARIOS } from '../data';
import SayThisInstead from '../components/SayThisInstead';
import { EscalationPath } from '../types';

interface ScenarioPageProps {
  scenarioId: string;
}

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white p-5 rounded-xl shadow-md">
        <h3 className="text-lg font-bold text-brand-teal mb-3">{title}</h3>
        {children}
    </div>
);

const EscalationBranch: React.FC<{ path: EscalationPath }> = ({ path }) => (
    <div className="mt-2 p-3 bg-slate-50 rounded-md border border-slate-200">
        <p className="font-semibold text-slate-700">{path.title}:</p>
        <p className="text-slate-600 mt-1">"{path.script}"</p>
    </div>
);

const ScenarioPage: React.FC<ScenarioPageProps> = ({ scenarioId }) => {
  const scenario = SCENARIOS.find((s) => s.id === scenarioId);

  if (!scenario) {
    return <div className="p-4 text-center">Scenario not found.</div>;
  }

  return (
    <div className="p-4 space-y-5">
      <header className="text-center my-4">
        <h1 className="text-2xl font-bold text-brand-text">{scenario.title}</h1>
      </header>

      <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 rounded-r-lg">
        <p className="font-bold">Immediate Grounding Prompt</p>
        <p>{scenario.grounding}</p>
      </div>

      <div className="space-y-5">
        <Section title="3 Lines to Open the Conversation">
          <ul className="list-disc list-inside space-y-2 text-brand-text-light">
            {scenario.openers.map((line, i) => <li key={i}>{line}</li>)}
          </ul>
        </Section>

        <Section title="3 Boundary-Setting Phrases">
          <ul className="list-disc list-inside space-y-2 text-brand-text-light">
            {scenario.boundaries.map((line, i) => <li key={i}>{line}</li>)}
          </ul>
        </Section>

        <Section title="The Secret Behaviourist 'Say This Instead' Swaps">
          <div className="space-y-4">
            {scenario.swaps.map((swap, i) => <SayThisInstead key={i} of={swap.of} instead={swap.instead} />)}
          </div>
        </Section>
        
        <Section title="Trauma-Informed Explanation">
          <p className="text-brand-text-light">{scenario.explanation}</p>
        </Section>

        <Section title="De-Escalation Steps">
          <ol className="list-decimal list-inside space-y-2 text-brand-text-light">
            {scenario.deEscalationSteps.map((step, i) => <li key={i}>{step}</li>)}
          </ol>
        </Section>

        <Section title="If They Escalate Further...">
            <EscalationBranch path={scenario.escalationPaths.anger} />
            <EscalationBranch path={scenario.escalationPaths.tears} />
            <EscalationBranch path={scenario.escalationPaths.shutdown} />
            <EscalationBranch path={scenario.escalationPaths.demandHead} />
        </Section>
        
        <Section title="Next-Step Actions">
            <ul className="list-disc list-inside space-y-2 text-brand-text-light">
                {scenario.nextSteps.map((step, i) => <li key={i}>{step}</li>)}
            </ul>
        </Section>

        <Section title="When to Pause / End the Conversation Safely">
            <ul className="list-disc list-inside space-y-2 text-brand-text-light">
                {scenario.whenToPause.map((line, i) => <li key={i}>{line}</li>)}
            </ul>
        </Section>
      </div>
    </div>
  );
};

export default ScenarioPage;
