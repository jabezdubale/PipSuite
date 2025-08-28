import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import SignIn from "./Pages/SignIn";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import HydrationGate from "./routes/HydrationGate";
import { RequireAuth, RedirectIfAuthed } from "./routes/guards";

function App() {
  return (
    <HydrationGate fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/signin"
          element={
            <RedirectIfAuthed>
              <SignIn />
            </RedirectIfAuthed>
          }
        />
        <Route
          path="/register"
          element={
            <RedirectIfAuthed>
              <Register />
            </RedirectIfAuthed>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
      </Routes>
    </HydrationGate>
  );
}

export default App;
