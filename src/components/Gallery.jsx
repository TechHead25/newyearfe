export default function Gallery({ images }) {
  return <div>{images.map((i, k) => <img key={k} src={i} />)}</div>;
}
