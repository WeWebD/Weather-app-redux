import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "./components/context/WeatherContext";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReduxProvider store={store}>
    <Provider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </ReduxProvider>
);
