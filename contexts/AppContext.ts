
import { createContext, Dispatch, SetStateAction } from 'react';

export type Page = 'home' | 'library' | 'templates' | 'redflags' | 'tools' | 'scenario';

export interface AppContextType {
  favorites: string[];
  toggleFavorite: (scriptId: string) => void;
  bookmarks: Page[];
  toggleBookmark: (page: Page) => void;
  // FIX: Add isPaidUser and setIsPaidUser to the context type to handle paid features.
  isPaidUser: boolean;
  setIsPaidUser: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextType | null>(null);
