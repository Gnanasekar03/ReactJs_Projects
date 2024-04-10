import useWindowResize from ".";
import "./style.css"

export default function UseWindowResizeTest() {
  const windowSize = useWindowResize();
  const { width, height } = windowSize;

  return (
    <div className="main">
      <h1>Use Window resize Hook</h1>
      <p>Width is {width}</p>
      <p>Height is {height}</p>
    </div>
  );
}