import { useState } from "react";
export default function SecretMessage({ text }) {
  const [show, setShow] = useState(false);
  return show ? <p>{text}</p> :
    <button onClick={() => setShow(true)}>Reveal Secret</button>;
}
