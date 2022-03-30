import React from 'react';
//gak perlu di import, alasan: sudah di import di 
// App.js dan src/index.js
// import ReactDOM from 'react-dom';
// import '../../index.css';
// import './App.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// reportWebVitals();



async function displayJson() {
    const response = await fetch(
        "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json",
        {
            method: "GET"
        }
    );
    const album = await response.json();
    console.log(album);
}
displayJson().catch((error) => {
    alert("There is an error");
});

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