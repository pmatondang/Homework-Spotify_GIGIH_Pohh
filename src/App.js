import * as React from "react";
import './App.css';
import './index.css';
import './responsive.css';
import HomePageHeader from './components/Home/homepage-header';
import { setToken } from "./reducer/tokenSlice";
import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  const queryString = new URL(window.location.href.replace("#", "?"))
    .searchParams;
  const accessToken = queryString.get("access_token");
  getUserId(accessToken);
  dispatch(setToken(accessToken));

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

