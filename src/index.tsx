import { Suspense } from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";

import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { store } from "./store/store";
import { myTheme } from "./theme/myTheme";

import "./firebase";
import "./services/i18next";
import "./styles/styles.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<BrowserRouter>
		<Provider store={store}>
			<Suspense fallback={<div>Loading</div>}>
				<ThemeProvider theme={myTheme}>
					<App />
				</ThemeProvider>
			</Suspense>
		</Provider>
	</BrowserRouter>
);
