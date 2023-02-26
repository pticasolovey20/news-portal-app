import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
	en: {
		translation: {
			pageTitle: "NEWS PORTAL",
			uaButton: "UA",
			enButton: "EN",
			homeButton: "HOME",
			newsButton: "NEWS",
			profileButton: "PROFILE",
			loginButton: "LOGIN",
			logoutButton: "LOGOUT",
			loadButton: "LOAD MORE",
			emailLabel: "Email",
			passwordLabel: "Password",
			footer: "Its my test task for the company AlterEGO",
		},
	},
	ua: {
		translation: {
			pageTitle: " ПОРТАЛ НОВИН",
			uaButton: "УКР",
			enButton: "АНГЛ",
			homeButton: "ГОЛОВНА",
			newsButton: "НОВИНИ",
			profileButton: "ПРОФІЛЬ",
			loginButton: "УВІЙТИ",
			logoutButton: "ВИЙТИ",
			loadButton: "ЗАВАНТАЖИТИ БІЛЬШЕ",
			emailLabel: "Електронна пошта",
			passwordLabel: "Пароль",
			footer: "Це моє тестове завдання для компанії AlterEGO",
		},
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: "en",
	fallbackLng: "en",
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
