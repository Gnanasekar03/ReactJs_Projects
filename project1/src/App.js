import './App.css';
import Accordian from './Components/Accordian';
import ImageSlider from './Components/Image-slider';
import LoadMoreData from './Components/load-more-data';
import TreeView from './Components/load-more-data/tree-view';
import menus from './Components/load-more-data/tree-view/data';
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
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

           {/* Load more products component */}
      {/* <LoadMoreData/> */}

       {/* Tree view component/menu UI component / recursive navigation menu */}
      <TreeView menus={menus} />



    </div>
  );
}

export default App;
