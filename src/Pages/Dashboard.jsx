import React, { useEffect, useState } from "react";
import { apiGet, apiPost } from "../lib/api";

const Dashboard = () => {
  const [user, setUser] = useState("");
  const [newName, setNewName] = useState("");
  const [err, setErr] = useState(null);

  const handleNaming = async (e) => {
    e.preventDefault();
    const res = await apiPost("/Users", {
      name: newName,
      UserName: "the New Name",
      Password: "new Password",
    });
  };

  useEffect(() => {
    apiGet("/Users/1")
      .then((u) => setUser(u))
      .catch((e) => setErr(e));
  }, []);

  if (err) return <div>Failed to load: {err.message}</div>;
  if (!user) return <div>Loading...</div>;
  return (
    <div>
      {user.name}
      <div>
        <input
          type="text"
          placeholder="New Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button onClick={handleNaming}>Set New Name</button>
      </div>
    </div>
  );
};

export default Dashboard;
