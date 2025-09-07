import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import SignIn from "./Pages/SignIn";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import HydrationGate from "./routes/HydrationGate";
import { RequireAuth, RedirectIfAuthed } from "./routes/guards";
import MainLayout from "./layouts/MainLayout";
import TradeJournal from "./Pages/TradeJournal";
import RiskCalculator from "./Pages/RiskCalculator";
import BackTester from "./Pages/BackTester";
import MoreTools from "./Pages/MoreTools";
import Settings from "./Pages/Settings";
import NewTrade from "./Pages/NewTrade";
import EditTrade from "./Pages/EditTrade";

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
        <Route
          path="/trade-journal"
          element={
            <RequireAuth>
              <TradeJournal />
            </RequireAuth>
          }
        />
        <Route
          path="/risk-calculator"
          element={
            <RequireAuth>
              <RiskCalculator />
            </RequireAuth>
          }
        />
        <Route
          path="/new-trade"
          element={
            <RequireAuth>
              <NewTrade />
            </RequireAuth>
          }
        />
        <Route
          path="/edit-trade/:id"
          element={
            <RequireAuth>
              <EditTrade />
            </RequireAuth>
          }
        />
        <Route
          path="/back-tester"
          element={
            <RequireAuth>
              <BackTester />
            </RequireAuth>
          }
        />
        <Route
          path="/more-tools"
          element={
            <RequireAuth>
              <MoreTools />
            </RequireAuth>
          }
        />
        <Route
          path="/settings"
          element={
            <RequireAuth>
              <Settings />
            </RequireAuth>
          }
        />

        <Route path="/layout" element={<MainLayout />} />
      </Routes>
    </HydrationGate>
  );
}

export default App;
