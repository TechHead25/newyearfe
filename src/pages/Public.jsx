import { useState } from "react";
import { api } from "../api";
import Gallery from "../components/Gallery";
import SecretMessage from "../components/SecretMessage";
import YouTubeMusicPlayer from "../components/YouTubeMusicPlayer";

export default function Public() {
  const [name, setName] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const load = async () => {
    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }

    try {
      setError("");
      const r = await api.get(`/memories/${encodeURIComponent(name)}`);
      setData(r.data);
    } catch (err) {
      console.error(err);
      setData(null);
      setError("No memories found for this name 🎇");
    }
  };

  return (
    <div style={{ color: "white", padding: "20px" }}>
      <h1>🎆 Happy New Year 🎆</h1>

      <input
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={load}>Celebrate</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {data && (
        <>
          <p>{data.note}</p>

          {/* SAFE GUARD */}
          {Array.isArray(data.images) && data.images.length > 0 && (
            <Gallery images={data.images} />
          )}

          <SecretMessage text={data.secret} />
        </>
      )}

      <YouTubeMusicPlayer />
    </div>
  );
}
