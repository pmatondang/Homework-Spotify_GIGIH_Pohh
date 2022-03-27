import * as React from "react";
import './App.css';
import './index.css';
import './responsive.css';
import Search from './components/Search/search';
import { ShowGif } from './components/Gif/gif-exercise-2';
import GifExerciseThree from './components/Gif/gif-exercise-3';
import HomePageHeader from './components/Home/homepage-header';
import HomePageFooter from './components/Home/homepage-footer';
import HomePageMain from "./components/Home/homepage-main";
import Album from "./components/Album";

function App() {
  return (
    <div className="App">
      <HomePageHeader />

      <div className="container">
        <Search />
        {/* <ShowGif />
        <HomePageMain />
        <GifExerciseThree /> */}
      </div>

      <div className="album-div"><Album /></div>

      <HomePageFooter />
    </div >
  )
}
export default App;

