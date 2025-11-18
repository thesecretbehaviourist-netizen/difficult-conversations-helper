
import React from 'react';
import { TOOLS } from '../data';

const ToolCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white p-5 rounded-xl shadow-md">
        <h3 className="text-lg font-bold text-brand-teal mb-3">{title}</h3>
        <div className="text-brand-text-light space-y-2">
            {children}
        </div>
    </div>
);

const ToolsPage: React.FC = () => {
    return (
        <div className="p-4">
            <header className="text-center my-6">
                <h1 className="text-3xl font-bold text-brand-text">Quick Tools</h1>
                <p className="mt-2 text-brand-text-light">Fast-access tools for in-the-moment support.</p>
            </header>
            
            <div className="space-y-5">
                <ToolCard title={TOOLS.regulate.title}>
                    {(TOOLS.regulate.content as string[]).map((line, i) => <p key={i}>{line}</p>)}
                </ToolCard>
                <ToolCard title={TOOLS.sequencer.title}>
                    {(TOOLS.sequencer.content as string[]).map((line, i) => <p key={i} dangerouslySetInnerHTML={{ __html: line }} />)}
                </ToolCard>
                 <ToolCard title={TOOLS.checker.title}>
                    <ul className="list-disc list-inside">
                        {(TOOLS.checker.content as string[]).map((line, i) => <li key={i}>{line}</li>)}
                    </ul>
                </ToolCard>
                <ToolCard title={TOOLS.spotter.title}>
                    {(TOOLS.spotter.content as string[]).map((line, i) => <p key={i} dangerouslySetInnerHTML={{ __html: line }} />)}
                </ToolCard>
            </div>
        </div>
    );
};

export default ToolsPage;
