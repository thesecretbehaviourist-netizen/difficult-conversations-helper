
import React from 'react';
import Accordion from '../components/Accordion';
import { RED_FLAGS_CONTENT } from '../data';

const RedFlagsPage: React.FC = () => {
  return (
    <div className="p-4">
      <header className="text-center my-6">
        <h1 className="text-3xl font-bold text-brand-text">Red Flags & Referrals</h1>
        <p className="mt-2 text-brand-text-light">DSL-minded advice for when conversations turn to safeguarding.</p>
      </header>
      
      <div className="space-y-4 max-w-2xl mx-auto">
        {RED_FLAGS_CONTENT.map((item, index) => (
          <Accordion key={index} title={item.title}>
            <p className="whitespace-pre-wrap">{item.content}</p>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default RedFlagsPage;
