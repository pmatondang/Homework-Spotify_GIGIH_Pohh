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
);

export default Search;