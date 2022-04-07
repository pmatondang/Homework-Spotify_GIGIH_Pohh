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
import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  // const [token, setToken] = useState("");
  // const token = useSelector((state) => state.token.value);
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

      <HomePageHeader />

      <div className="container">
        {isAuth ? (
          <Router>
            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                  return isAuth ? (
                    <Redirect to="/create-playlist" />
                  ) : (
                    <Redirect to="/" />
                  );
                }}
              />

              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/create-playlist">
                <CreatePlaylist />
              </Route>
              <Route path="/playlist">
                <Playlist />
              </Route>
            </Switch>
          </Router>
        ) : (
          <div className="container d-flex justify-content-center align-items-center vh-100">
            <a href={urlGet} className="btn btn-danger">
              Anda Belum Login, Klik Untuk Login
            </a>
          </div>
        )}
      </div>
    </div >
  );
};
export default App;

