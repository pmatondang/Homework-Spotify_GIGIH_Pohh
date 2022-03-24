import * as React from "react";
import './App.css';
import './index.css';
import './responsive.css';
import Search from './components/search';
import { ShowGif } from './components/gif'
import HomePageHeader from './components/home/homepage-header';
import HomePageFooter from './components/home/homepage-footer';
import HomePageMain from "./components/home/homepage-main";

function App() {
  return (
    <div className="App">
      <HomePageHeader />

      <div className="container">
        <Search />
        {/* <ShowGif /> */}

        <HomePageMain />
      </div>

      <HomePageFooter />
    </div >
  )
}
export default App;

