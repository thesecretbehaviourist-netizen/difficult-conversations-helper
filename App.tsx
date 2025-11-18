
import React, { useState, useCallback } from 'react';
import { AppContext, Page } from './contexts/AppContext';
import useLocalStorage from './hooks/useLocalStorage';
import HomePage from './pages/HomePage';
import ScenarioPage from './pages/ScenarioPage';
import ScriptLibraryPage from './pages/ScriptLibraryPage';
import TemplatesPage from './pages/TemplatesPage';
import RedFlagsPage from './pages/RedFlagsPage';
import ToolsPage from './pages/ToolsPage';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [activeScenarioId, setActiveScenarioId] = useState<string | null>(null);
  const [favorites, setFavorites] = useLocalStorage<string[]>('favorites', []);
  const [bookmarks, setBookmarks] = useLocalStorage<Page[]>('bookmarks', []);
  // FIX: Add isPaidUser state to manage user payment status.
  const [isPaidUser, setIsPaidUser] = useLocalStorage<boolean>('isPaidUser', false);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    setActiveScenarioId(null);
  };

  const openScenario = (scenarioId: string) => {
    setActiveScenarioId(scenarioId);
    setCurrentPage('scenario');
  };

  const toggleFavorite = useCallback((scriptId: string) => {
    setFavorites(prev => 
      prev.includes(scriptId) ? prev.filter(id => id !== scriptId) : [...prev, scriptId]
    );
  }, [setFavorites]);
  
  const toggleBookmark = useCallback((page: Page) => {
    setBookmarks(prev => 
      prev.includes(page) ? prev.filter(p => p !== page) : [...prev, page]
    );
  }, [setBookmarks]);

  const renderPage = () => {
    if (currentPage === 'scenario' && activeScenarioId) {
      return <ScenarioPage scenarioId={activeScenarioId} />;
    }
    switch (currentPage) {
      case 'home':
        return <HomePage openScenario={openScenario} />;
      case 'library':
        return <ScriptLibraryPage />;
      case 'templates':
        return <TemplatesPage />;
      case 'redflags':
        return <RedFlagsPage />;
      case 'tools':
        return <ToolsPage />;
      default:
        return <HomePage openScenario={openScenario} />;
    }
  };

  const appContextValue = {
    favorites,
    toggleFavorite,
    bookmarks,
    toggleBookmark,
    // FIX: Provide isPaidUser and setIsPaidUser through the context.
    isPaidUser,
    setIsPaidUser,
  };

  return (
    <AppContext.Provider value={appContextValue}>
      <div className="bg-brand-background min-h-screen font-sans text-brand-text">
        <main className="pb-24">
          {renderPage()}
        </main>
        <BottomNav currentPage={currentPage} navigateTo={navigateTo} />
      </div>
    </AppContext.Provider>
  );
};

export default App;
