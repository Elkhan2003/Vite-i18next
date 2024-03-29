import React, { useContext, useState } from "react";
import { TranslatorContext } from "../provider/TranslatorProvider";
import "./Text.scss";

export const Text = () => {
	const { t, changeLanguage } = useContext(TranslatorContext);
	const [currentLanguage, setCurrentLanguage] = useState(
		localStorage.getItem("i18nextLng")
	);

	const handleLanguageChange = (lang) => {
		changeLanguage(lang);
		setCurrentLanguage(lang);
	};

	const isLanguage = (lang) => {
		return currentLanguage.startsWith(lang);
	};

	return (
		<>
			<div className="text__fsefer">
				<button
					onClick={() => handleLanguageChange("en")}
					className={isLanguage("en") ? "button active" : "button"}>
					EN
				</button>
				<button
					onClick={() => handleLanguageChange("ru")}
					className={isLanguage("ru") ? "button active" : "button"}>
					RU
				</button>
				<button
					onClick={() => handleLanguageChange("cn")}
					className={isLanguage("cn") ? "button active" : "button"}>
					CN
				</button>
				<div>{t("text")}</div>
				<div>{t("hello")}</div>
			</div>
		</>
	);
};
