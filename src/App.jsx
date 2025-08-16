import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./assets/components/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
