import { useEffect } from "react";
import Lottie from "lottie-react";

export default function Fireworks({ show, onEnd }) {
  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        pointerEvents: "none",
      }}
    >
      <Lottie
        path="/fireworks.json"
        loop={false}
      />
    </div>
  );
}


// export default function Fireworks({ show, onEnd }) {
//   useEffect(() => {
//     if (show) {
//       const timer = setTimeout(() => {
//         onEnd();
//       }, 6000); // stop after 6s

//       return () => clearTimeout(timer);
//     }
//   }, [show, onEnd]);

//   if (!show) return null;

//   return (
//     <div
//       style={{
//         position: "fixed",
//         inset: 0,
//         zIndex: 50,
//         pointerEvents: "none",
//         background: "transparent",
//       }}
//     >
//       <Lottie
//         animationData={fireworks}
//         loop={false}
//         style={{ width: "100%", height: "100%" }}
//       />
//     </div>
//   );
// }
