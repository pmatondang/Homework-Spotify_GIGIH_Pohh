import React from "react";
import './CSS/index.css';

const AlbumPage = ({ artist, singer, url, release_date, type, total_trakcs, spotify }) => {
    return (
        <div className="top-wrapper">
            <div className="album-in">
                <img className="image" src={url} />
                <p className="album-icon">{artist}</p>
                <p className="singer">by: {singer} -- {total_trakcs}({type}) -- Release on {release_date}
                </p>
                <div className="aHref">
                    <a href={spotify} >Go to Spotify </a>
                </div>

                <div className="btn-div">
                    <button type='submit' className='btn-playlist' id='btn-play'>Select</button>
                </div>

            </div>
        </div >
    )
}

export default AlbumPage;