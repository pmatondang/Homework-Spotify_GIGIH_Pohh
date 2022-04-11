import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
    const [query, setQuery] = useState("");

    const handleOnChange = (e) => {
        setQuery(e.target.value)
    }
    const getGifs = async () => {
        const gifs = await
            axios
                .get(
                    `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=12`
                )

    }
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
};

export default Search;