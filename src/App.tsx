import './app.scss';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AppHeader from './components/header/header';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.language === 'ar_AR' ? 'rtl' : 'ltr';
    document.body.setAttribute('dir', dir);
  }, [i18n.language]);
  
  return (
    <div className="pro-house-app">
      <AppHeader></AppHeader>
    </div>
  );
}

export default App;
