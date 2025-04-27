import './App.scss';
import { useEffect } from 'react';
import AppHeader from './components/header/header';
import { useTranslation } from 'react-i18next';
import RightToolbar from './components/right-toolbar/right-toolbar';
import AppContent from './components/app-main/app-main';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.language === 'ar_AR' ? 'rtl' : 'ltr';
    document.body.setAttribute('dir', dir);
  }, [i18n.language]);
  
  return (
    <div className="pro-house-app">
      <RightToolbar></RightToolbar>
      <AppHeader></AppHeader>
      <AppContent></AppContent>
    </div>
  );
}

export default App;

