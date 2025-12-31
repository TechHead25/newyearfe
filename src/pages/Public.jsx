import { useState } from "react";
import { api } from "../api";
import Gallery from "../components/Gallery";
import SecretMessage from "../components/SecretMessage";
import YouTubeMusicPlayer from "../components/YouTubeMusicPlayer";
import Fireworks from "../components/Fireworks";

export default function Public() {
  const [name, setName] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [showFireworks, setShowFireworks] = useState(false);

  const load = async () => {
    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }

    try {
      setError("");
      const r = await api.get(`/memories/${encodeURIComponent(name)}`);
      setData(r.data);
      setShowFireworks(true);
    } catch (err) {
      console.error(err);
      setData(null);
      setError("No memories found for this name 🎇");
    }
  };

  return (
    <div style={{ color: "white", padding: "20px" }}>
      <Fireworks show={showFireworks} onEnd={() => setShowFireworks(false)} />

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
          {Array.isArray(data.images) && <Gallery images={data.images} />}
          <SecretMessage text={data.secret} />
        </>
      )}

      <YouTubeMusicPlayer />
    </div>
  );
}
