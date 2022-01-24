import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes/Routes";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}
