import ReactDOM from "react-dom/client";
import App from "./App";
import { AnkiProvider } from "./context/AnkiProvider";
import "./styles/App.css";
import "./styles/_bases.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AnkiProvider>
    <App />
  </AnkiProvider>
);
