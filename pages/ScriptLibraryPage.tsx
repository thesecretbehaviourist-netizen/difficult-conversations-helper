
import React, { useContext } from 'react';
import { SCRIPT_LIBRARY } from '../data';
import ScriptItem from '../components/ScriptItem';
import { AppContext, AppContextType } from '../contexts/AppContext';
import Icon from '../components/Icon';

const ScriptLibraryPage: React.FC = () => {
    const { bookmarks, toggleBookmark } = useContext(AppContext) as AppContextType;
    const pageKey = 'library';
    const isBookmarked = bookmarks.includes(pageKey);

    return (
        <div className="p-4">
            <header className="text-center my-6 flex items-center justify-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-brand-text">Script Library</h1>
                    <p className="mt-2 text-brand-text-light">Practical, realistic lines you can use right now.</p>
                </div>
                 <button onClick={() => toggleBookmark(pageKey)} className={`transition-colors ${isBookmarked ? 'text-brand-teal' : 'text-slate-400 hover:text-brand-teal'}`}>
                    <Icon name={isBookmarked ? 'bookmark-filled' : 'bookmark'} className="w-7 h-7" />
                </button>
            </header>

            <div className="space-y-8">
                {SCRIPT_LIBRARY.map((category) => (
                    <div key={category.title}>
                        <h2 className="text-xl font-bold text-brand-teal mb-4">{category.title}</h2>
                        <div className="space-y-3">
                            {category.scripts.map((script) => (
                                <ScriptItem key={script.id} script={script} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScriptLibraryPage;
