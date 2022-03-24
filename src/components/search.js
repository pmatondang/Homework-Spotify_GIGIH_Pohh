import React from 'react';
//gak perlu di import, alasan: sudah di import di 
// App.js dan src/index.js
// import ReactDOM from 'react-dom';
// import '../../index.css';
// import './App.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// reportWebVitals();

const Search = () => (
    <div>
        <form className="search" action="#" method="get">
            <input
                className="search-bar"
                type="text"
                id="header-search"
                placeholder="Search blog posts"
                name="" required
            />
            <button className="search-button" type="submit">Search</button>
        </form >

        {/* <div className="img">
            <img className="img"
                src="https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif" />
        </div> */}

    </div>
);

export default Search;