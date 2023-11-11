import React, { useContext } from "react";
import { languageContext } from "./LanguageContext";
const ContentLanguage = () => {
    const { language } = useContext(languageContext);

    return <div className="bg-gray-100 p-5 mt-5">{language.content}</div>;
};

export default ContentLanguage;
