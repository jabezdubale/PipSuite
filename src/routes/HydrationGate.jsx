import { useEffect, useState } from "react";
import useAuth from "../stores/auth";

export default function HydrationGate({ children, fallback = null }) {
  const [ready, setReady] = useState(useAuth.persist.hasHydrated());

  useEffect(() => {
    const unsub = useAuth.persist.onFinishHydration(() => setReady(true));
    return unsub;
  }, []);

  return ready ? children : fallback;
}
