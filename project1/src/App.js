import './App.css';
import Accordian from './Components/Accordian';
import ImageSlider from './Components/Image-slider';
import LoadMoreData from './Components/load-more-data';
import TreeView from './Components/tree-view';
import menus from './Components/tree-view/data';
import RandomColor from './Components/randomColor';
import StarRating from './Components/star-rating';
import LightDarkMode from './Components/light-dark-mode';
import QRCodeGenerator from './Components/Qr-code-generator';
import ScrollIndicator from './Components/scoll-indicator';
import UseWindowResizeTest from './Components/use-window-resize/Test';
import TabTest from './Components/Custom-Tabs/tab-test';
import ModalTest from './Components/Custom-modal-popup/modal-test';
import GithubProfileFinder from './Components/github-profile-finder';
import SearchAutocomplete from './Components/search-auto-complete-API/index.jsx';
import TicTacToe from './Components/tic-tac-toe/index.jsx';
import ScrollToTopAndBottom from './Components/Scroll-Top-to-Bottom/index.jsx';
import UseFetchHookTest from './Components/usefetch/test.jsx';
import UseOnclickOutsideTest from './Components/useOnclickOuside/test.jsx';
import Stopwatch from './Components/stopwatch/index.jsx';
import Login from './Components/login-page/login.jsx';
import FeatureFlagGlobalState from './Components/feature_flag/context/index.jsx';
import FeatureFlags from './Components/feature_flag/index.jsx';

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
      {/* <TreeView menus={menus} /> */}
        {/* light and dark theme switch */}
      {/* <LightDarkMode/> */}
      {/* <QRCodeGenerator/> */}
          {/* Scroll indicator component */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* <UseWindowResizeTest/> */}
        {/* Custom tabs component */}
      {/* <TabTest /> */}
       {/* Custom Modal Component */}
      {/* <ModalTest/> */}
      {/* Github profile finder */}
      {/* <GithubProfileFinder/> */}
      {/* <SearchAutocomplete/> */}
        {/* Feature Flag IMplementation */}
        {/* <TicTacToe/> */}
        {/* <UseFetchHookTest/> */}
        {/* <ScrollToTopAndBottom/> */}
        {/* <UseOnclickOutsideTest/> */}
        {/* <Stopwatch/> */}
        {/* <Login/> */}
      <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> 



        
     

      



    </div>
  );
}

export default App;
