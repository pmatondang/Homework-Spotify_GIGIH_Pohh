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
import SearchBar from "./components/Search/index";
import SearchBarIndex from "./components/Home/search-bar-index";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "./reducer/tokenSlice";

function App() {
  const [token, setToken] = useState("");
  const token = useSelector((state) => state.token.value);
  const dispatch = useDispatch();
  const [userId, setUserId] = useState("");
  const [searchSong, setSearchSong] = useState("");
  const [songData, setSongData] = useState([]);

  const queryString = new URL(window.location.href.replace("#", "?"))
    .searchParams;
  const accessToken = queryString.get("access_token");
  getUserId(accessToken);
  dispatch(setToken(accessToken));

  // a function to get the user id
  const getUserId = async (token) => {
    await axios
      .get(`https://api.spotify.com/v1/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserId(response.data.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className="App">
      <Provider store
      <HomePageHeader />

      <div className="container">
        <SearchBarIndex />
        {/* <Search /> */}
        {/* <ShowGif />
        <HomePageMain />
        <GifExerciseThree /> */}
      </div>

      {/* <div className="album-div"><Album /></div> */}

      {/* <HomePageFooter /> */}
    </div >
  )
}
export default App;

