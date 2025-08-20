import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
