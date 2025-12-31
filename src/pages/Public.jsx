import { useState } from "react";
import { api } from "../api";
import Gallery from "../components/Gallery";
import SecretMessage from "../components/SecretMessage";
import YouTubeMusicPlayer from "../components/YouTubeMusicPlayer";

export default function Public() {
  const [name, setName] = useState("");
  const [data, setData] = useState(null);

  const load = async () => {
    const r = await api.get(`/memories/${name}`);
    setData(r.data);
  };

  return (
    <div>
      <h1>Happy New Year 🎆</h1>
      <input onChange={e => setName(e.target.value)} />
      <button onClick={load}>Celebrate</button>
      {data && (
        <>
          <p>{data.note}</p>
          <Gallery images={data.images} />
          <SecretMessage text={data.secret} />
        </>
      )}
      <YouTubeMusicPlayer />
    </div>
  );
}
