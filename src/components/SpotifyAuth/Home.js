import React from 'react';
import { Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

const Home = (props) => {
  const REACT_APP_CLIENT_ID = "22a33cfa87434dc196b12288851cb0ba";
  const REACT_APP_AUTHORIZE_URL = "https://accounts.spotify.com/authorize";
  const REACT_APP_REDIRECT_URL = "http://localhost:3000/redirect";

  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  };

  const { isValidSession, location } = props;
  const { state } = location;
  const sessionExpired = state && state.session_expired;

  return (
    <React.Fragment>
      {isValidSession() ? (
        <Redirect to="/dashboard" />
      ) : (
        <div className="login">
          <h1>User Authentication</h1>
          {sessionExpired && (
            <Alert variant="info">Session expired.. Please login again.</Alert>
          )}
          <Button className="search-button" variant="info" type="submit" onClick={handleLogin}>
            Login
          </Button>
        </div>
      )}
    </React.Fragment>
  );
};

export default connect()(Home);