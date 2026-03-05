import "./App.css";
import { Routes, Route } from "react-router-dom";
import SearcherPage from "./pages/SearcherPage/SearcherPage";

function App() {
  return (
    <Routes>
      {/* Página principal con filtros en query params */}
      <Route path="/" element={<SearcherPage />} />
    </Routes>
  );
}

export default App;