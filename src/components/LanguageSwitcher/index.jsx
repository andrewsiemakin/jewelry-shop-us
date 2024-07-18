import { useState } from 'react';
import s from './LanguageSwitcher.module.scss';

const LanguageSwitcher = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('EN');

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
    };

    return (
        <div className={s.languageSwitcher}>
            <button
                className={`${s.languageButton} ${selectedLanguage === 'EN' ? s.active : ''}`}
                onClick={() => handleLanguageChange('EN')}
            >
                EN
            </button>
            <button
                className={`${s.languageButton} ${selectedLanguage === 'ES' ? s.active : ''}`}
                onClick={() => handleLanguageChange('ES')}
            >
                ES
            </button>
        </div>
    );
};

export default LanguageSwitcher;
