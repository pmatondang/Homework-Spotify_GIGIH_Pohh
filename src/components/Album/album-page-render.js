import React from "react";
import albums from "../../data/data-album.js";
import AlbumPage from "./album-page";

const RenderAlbumPage = () => {
    return albums.map((album) => (
        <div>
            < AlbumPage
                key={album.album.id}
                album_type={album.album.album_type}
                artist={album.album.name}
                spotify={album.album.external_urls.spotify}
                singer={album.album.artists[0].name}
                total_trakcs={album.album.total_tracks}
                url={album.album.images[1].url}
                type={album.album.type}
                release_date={album.album.release_date}
            />
        </div>
    ));
};

export default RenderAlbumPage;