import { createRoot } from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import {Provider} from "react-redux";
import counterStore from "./store";

createRoot(document.getElementById("root")).render(<Provider store={counterStore}><App></App></Provider>);
