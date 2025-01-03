import {createRoot} from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"
import ContextProvider from "./AppContext";

createRoot(document.getElementById("root")).render(
    <ContextProvider><App></App></ContextProvider>
)