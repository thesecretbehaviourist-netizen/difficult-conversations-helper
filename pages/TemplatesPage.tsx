import React, { useState, useRef, useEffect } from 'react';
import { TEMPLATES } from '../data';
import { Template } from '../types';
import Icon from '../components/Icon';

// FIX: Declare jspdf and html2canvas on the window object to resolve TypeScript errors.
declare global {
    interface Window {
        jspdf: any;
        html2canvas: any;
    }
}

const TemplateForm: React.FC<{ template: Template, onBack: () => void }> = ({ template, onBack }) => {
    const [content, setContent] = useState(template.content);
    const [copied, setCopied] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (copied) {
          const timer = setTimeout(() => setCopied(false), 2000);
          return () => clearTimeout(timer);
        }
    }, [copied]);

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(contentRef.current?.innerText || '');
        setCopied(true);
    };

    const handleExportToPdf = () => {
        const { jsPDF } = window.jspdf;
        const contentElement = contentRef.current;
        if (contentElement) {
            window.html2canvas(contentElement).then(canvas => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'px', [canvas.width, canvas.height]);
                pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
                pdf.save(`${template.title.replace(/\s+/g, '-')}.pdf`);
            });
        }
    };
    
    return (
        <div>
            <button onClick={onBack} className="text-brand-teal font-semibold mb-4">&larr; Back to all templates</button>
            <h2 className="text-2xl font-bold text-brand-text mb-4">{template.title}</h2>
            <div ref={contentRef} contentEditable suppressContentEditableWarning className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 min-h-[300px] focus:outline-none focus:ring-2 focus:ring-brand-teal whitespace-pre-wrap" onInput={e => setContent(e.currentTarget.innerText)}>
                {content}
            </div>
            <div className="flex items-center space-x-4 mt-6">
                <button onClick={handleCopyToClipboard} className="flex items-center justify-center gap-2 w-full bg-slate-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-slate-700 transition-colors">
                    {copied ? <><Icon name="check" className="w-5 h-5"/> Copied!</> : <><Icon name="copy" className="w-5 h-5"/> Copy to Clipboard</>}
                </button>
                <button onClick={handleExportToPdf} className="flex items-center justify-center gap-2 w-full bg-brand-teal text-white font-bold py-3 px-4 rounded-lg hover:bg-brand-teal-dark transition-colors">
                    <Icon name="download" className="w-5 h-5"/> Export as PDF
                </button>
            </div>
        </div>
    );
};


const TemplatesPage: React.FC = () => {
    const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

    const handleSelectTemplate = (template: Template) => {
        setSelectedTemplate(template);
    };

    if (selectedTemplate) {
        return (
            <div className="p-4 my-6">
                <TemplateForm template={selectedTemplate} onBack={() => setSelectedTemplate(null)} />
            </div>
        );
    }
    
    return (
        <div className="p-4">
            <header className="text-center my-6">
                <h1 className="text-3xl font-bold text-brand-text">Parent Meeting Templates</h1>
                <p className="mt-2 text-brand-text-light">Editable templates for clear, professional communication.</p>
            </header>
            <div className="space-y-4">
                {TEMPLATES.map(template => (
                    <button key={template.id} onClick={() => handleSelectTemplate(template)} className="w-full p-6 text-left bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-between">
                        <span className="text-lg font-semibold text-brand-text">{template.title}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TemplatesPage;