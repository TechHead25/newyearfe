import { useState } from "react";
import { youtubeSongs } from "../data/youtubeSongs";

export default function YouTubeMusicPlayer() {
  const [vid, setVid] = useState(null);
  return (
    <div>
      {youtubeSongs.map(s => (
        <button key={s.id} onClick={() => setVid(s.id)}>{s.name}</button>
      ))}
      {vid && <iframe src={`https://www.youtube.com/embed/${vid}?autoplay=1`} />}
    </div>
  );
}
