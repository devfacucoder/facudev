import { useEffect, useState } from 'react'
import './App.css'

import Start from './sections/Start';
import Proyects from './sections/Proyects';
import Contact from './sections/Contact';
import EN from './data/EN.json';
import ES from './data/ES.json';

const translations = { en: EN, es: ES };

function App() {
  const [language, setLanguage] = useState('es');
  const t = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.meta.title;
  }, [language, t]);

  return (
    <div className='bg-black'>
      <header>

      </header>
      <main>
        <Start t={t} language={language} onLanguageChange={setLanguage} />
        <Proyects t={t} />
        <Contact t={t} />
      </main>
    </div>
  );
}

export default App;
