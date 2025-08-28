import React, { useEffect, useState } from "react";
import { apiGet, apiPost } from "../lib/api";

const Dashboard = () => {
  const [user, setUser] = useState("");
  const [err, setErr] = useState(null);

  useEffect(() => {
    apiGet("/Users/1")
      .then((u) => setUser(u))
      .catch((e) => setErr(e));
  }, []);

  if (err) return <div>Failed to load: {err.message}</div>;
  if (!user) return <div>Loading...</div>;
  return <div>{user.name}</div>;
};

export default Dashboard;
