import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { store } from "./store/store";
import "./firebase";
import "./services/i18next";
import "./styles/styles.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<BrowserRouter>
		<Provider store={store}>
			<Suspense fallback={<div>Loading</div>}>
				<App />
			</Suspense>
		</Provider>
	</BrowserRouter>
);
