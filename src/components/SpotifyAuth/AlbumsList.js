import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import _ from 'lodash';
import music from '../../images/music.jpeg';
import '../../index.css'
const AlbumsList = ({ albums }) => {
    const [isSelected] = useState([]);
    const handleSelect = (idx) => {
        let arr = albums.items.map((item, ind) => {
            if (idx == ind) {
                item.selectedItems = item.selectedItems;
            }
            return { ...item }
        })
        console.log("selection handler ==> ", arr);
    }

    return (
        <React.Fragment>
            {Object.keys(albums).length > 0 && (
                <div className="albums playlist">
                    {albums.items.map((album, index) => {
                        return (
                            <React.Fragment key={index}>
                                <Card style={{ width: '18rem' }}>
                                    <div className='parent-grid'>
                                        <a
                                            target="_blank"
                                            href={album.external_urls.spotify}
                                            rel="noopener noreferrer"
                                            className="card-image-link flex"
                                        >
                                            {!_.isEmpty(album.images) ? (
                                                <Card.Img
                                                    variant="top"
                                                    src={album.images[0].url}
                                                    alt=""
                                                />
                                            ) : (
                                                <img src={music} alt="" />
                                            )}
                                        </a>
                                        <Card.Body>
                                            <Card.Title>{album.name}</Card.Title>
                                            <Card.Text>
                                                <small>
                                                    {album.artists.map((artist) => artist.name).join(', ')}
                                                </small><br />
                                                <small>
                                                    <button className="search-button" type="submit" id="btn-selected" onClick={handleSelect}>{isSelected ? "Deselect" : "Select"}</button>
                                                </small>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </React.Fragment>
                        );
                    })}
                </div>
            )}
        </React.Fragment>
    );
};
export default AlbumsList;