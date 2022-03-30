import React, { useState } from 'react';
import axios from 'axios';

export default function SearchBar() {
    //useState -> in java is setter getter
    //[] -> show that data is list
    const [data, setData] = useState([]);
    const searchHandle = (event) => {
        event.preventDefault();
        axios.get(`https://api.giphy.com/v1/gifs/search`, {
            ///config using keyword param dan isi objeknya 
            params: {
                api_key: process.env.REACT_APP_GIPHY_KEY,
                q: "mario",
                limit: 12
            }
        }).then((response) => {
            console.log(response.data.data)
            setData(response.data.data);
        });
    };

    return (
        <div>
            <form className="search" onSubmit={searchHandle}>
                <input
                    className="search-bar"
                    type="text"
                    id="header-search"
                    placeholder="Search blog posts"
                // name="" required
                />
                <input
                    type="submit"
                    className="search-button"
                    value="Search" />
                {/* <button className="search-button" type="submit">Search</button> */}
            </form >
            <div>
                {data.map((dataList) => { //dataList -> new var
                    return (
                        <div key={dataList.id} >
                            <img src={dataList.images.original.url} />
                        </div>
                    )
                })}
            </div>
            {/* <div className="img">
            <img className="img"
                src="https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif" />
        </div> */}

        </div>
    )
}

