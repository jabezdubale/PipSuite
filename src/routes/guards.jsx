import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../stores/auth";

export function RequireAuth({ children }) {
  const user = useAuth((state) => state.user);
  const hydrated = useAuth.persist.hasHydrated();
  const loc = useLocation();

  if (!hydrated) return <div>Loading...</div>;
  if (!user) return <Navigate to="/signin" replace state={{ from: loc }} />;
  return children;
}

export function RedirectIfAuthed({ children }) {
  const user = useAuth((state) => state.user);
  const hydrated = useAuth.persist.hasHydrated();

  if (!hydrated) return <div>Loading...</div>;
  if (user) return <Navigate to="/dashboard" replace />;
  return children;
}
