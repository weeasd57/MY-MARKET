'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from 'next-themes';
import '../lib/i18n';

interface AppContextType {
  language: string;
  changeLanguage: (lang: string) => void;
  isRTL: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export function AppProvider({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('ar');
  const [isRTL, setIsRTL] = useState(true);

  useEffect(() => {
    // Get language from localStorage or default to Arabic
    const savedLanguage = localStorage.getItem('language') || 'ar';
    setLanguage(savedLanguage);
    setIsRTL(savedLanguage === 'ar');
    i18n.changeLanguage(savedLanguage);
    
    // Update document direction and language
    document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = savedLanguage;
  }, [i18n]);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    setIsRTL(lang === 'ar');
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
    
    // Update document direction and language
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="system" 
      enableSystem
      disableTransitionOnChange
    >
      <AppContext.Provider value={{ language, changeLanguage, isRTL }}>
        {children}
      </AppContext.Provider>
    </ThemeProvider>
  );
}
