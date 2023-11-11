import React, { createContext, useState } from "react";
import ChooseLanguage from "./ChooseLanguage";
import ContentLanguage from "./ContentLanguage";

export const languageContext = createContext();
export const translations = [
    {
        language: "VI",
        content:
            "Khi tất cả mọi thứ dường như chống lại bạn, hãy nhớ rằng máy bay cất cánh được nhờ ngược chiều gió.",
    },
    {
        language: "EN",
        content:
            "When everything seems to be against you, remember that planes take off against the wind.",
    },
    {
        language: "KO",
        content:
            "모든 것이 당신에게 불리한 것처럼 보일 때, 비행기는 바람을 거슬러 이륙한다는 것을 기억하십시오.",
    },
    {
        language: "JA",
        content:
            "すべてが自分にとって不利に見えるときは、飛行機が風に向かって離陸することを思い出してください。",
    },
];
const LanguageContext = () => {
    const [language, setLanguage] = useState(translations[0]);
    const handleChangeLanguage = (index) => {
        setLanguage(translations[index]);
    };
    return (
        <languageContext.Provider value={{ language, handleChangeLanguage }}>
            <div className="shadow-sm border border-gray-300 w-2/6 m-auto mt-20 p-10">
                <h1 className="mb-5 text-xl font-medium">{language.language}</h1>
                <ChooseLanguage></ChooseLanguage>
                <ContentLanguage></ContentLanguage>
            </div>
        </languageContext.Provider>
    );
};

export default LanguageContext;
