import React, { useState } from 'react';
import axios from 'axios';

const Trending = () => {
    const [data, setData] = useState();
    const [query, setQuery] = useState("");

    const handleOnChange = (e) => {
        setQuery(e.target.value)
    }
    const getGifs = async () => {
        const gifs = await
            axios
                .get(
                    `http://api.giphy.com/v1/gifs/trending?q=${query}&api_key=${apiKey}&limit=20`
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

    </div>
};

export default Trending;