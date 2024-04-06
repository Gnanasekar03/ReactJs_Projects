import './App.css';
import Accordian from './Components/Accordian';
import ImageSlider from './Components/Image-slider';
import RandomColor from './Components/randomColor';
import StarRating from './Components/star-rating';

function App() {
  return (
    <div className="App">
      {/* Accordian Component */}
      {/* <Accordian/> */}
      {/* RandomColor Component */}
      {/* <RandomColor/> */}
      {/* Star-Rating Component */}
      {/* <StarRating  noOfStars={10} /> */}
      {/* Image-Slider  Component*/}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </div>
  );
}

export default App;
