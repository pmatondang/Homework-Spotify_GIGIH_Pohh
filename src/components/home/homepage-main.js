import React from "react";

import data from '../../data/data-sample.js';

export default function HomePageMain() {
    return (
        <div className="data">
            <div className="top-wrapper">
                {data.map((albumAtribute, albums) => {
                    return (
                        <>
                            <h1 className="h1">ALL {albumAtribute.album.album_type}</h1>
                            <div className="playlist" key={albums}>
                                <div>
                                    <div className="top-wrapper">
                                        {
                                            albumAtribute.album.images.map((imageAtribute) => {
                                                return (
                                                    <div className="top-wrapper">
                                                        <div className="playlist-in" key={imageAtribute}>
                                                            {/* <p>{imageAtribute.id}</p> */}
                                                            <div className="image-div">
                                                                <center><img className="img" src={imageAtribute.url} /></center>
                                                            </div>
                                                            <p className="playlist-icon">Title: {albumAtribute.name}</p>
                                                            {albumAtribute.artists.map((artistAtribute, art) => {
                                                                return (
                                                                    <div key={art}>
                                                                        <p className="txt-contents">{artistAtribute.name} - {albumAtribute.album.name}</p>
                                                                        <div className="aHref">
                                                                            {
                                                                                artistAtribute.external_urls && (
                                                                                    <a href={artistAtribute.external_urls?.spotify} >Go to Spotify </a>
                                                                                )
                                                                            }
                                                                            OR <a href={albumAtribute.external_urls.spotify}> Song Liric</a>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })}
                                                            <div className="button-div">
                                                                <button type='submit' className='btn-playlist' id='btn-play'>Select</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>

                                </div>
                            </div>

                            <h1 className="h1">ALL ARTISTS</h1>
                            <div className="playlist top-wrapper">
                                <div className="top-wrapper">
                                    {albumAtribute.artists.map((artistAtribute, art) => {
                                        return (
                                            <div className="playlist-in" key={art}>
                                                <table className="top-wrapper">
                                                    <tr>
                                                        <th></th>
                                                        <th>Popularity</th>
                                                        <th>Track</th>
                                                        <th></th>
                                                    </tr>
                                                    <tr>
                                                        <td className="artist">
                                                            {albumAtribute.name}<br />
                                                            <p className="singer">by: {artistAtribute.name}</p>
                                                        </td>
                                                        <td className="artist1">{albumAtribute.popularity}</td>
                                                        <td className="artist1">{albumAtribute.track_number}</td>
                                                        <td ><a href={albumAtribute.external_urls.spotify}>Play</a></td>
                                                    </tr>
                                                </table>
                                            </div>
                                        )
                                    })
                                    }
                                </div>
                            </div>

                        </>
                    )
                })}
            </div>
        </div>
    )
}