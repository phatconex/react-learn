import React, { useContext } from "react";
import { languageContext, translations } from "./LanguageContext";

const ChooseLanguage = () => {
    const { handleChangeLanguage } = useContext(languageContext);
    return (
        <div>
            {translations.map((item, index) => (
                <button
                    key={index}
                    className="bg-black text-white py-1 px-3 text-xs font-medium mr-2"
                    onClick={() => handleChangeLanguage(index)}
                >
                    {item.language}
                </button>
            ))}
        </div>
    );
};

export default ChooseLanguage;
