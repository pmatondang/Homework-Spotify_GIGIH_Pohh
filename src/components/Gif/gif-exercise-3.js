import React from "react";
import NewGifs from '../../data/data-gif';

const Gif = ({ title, rating, uploadedDate, url, webp }) => (
    <div>
        <h1>{title}</h1>
        <p className="txt-contents">{uploadedDate}</p>
        <p className="txt-contents">{rating}</p>
        <img className="img" src={url} alt="gif dari data-gif" />
        <a href={webp} />
    </div>
);

const useIfg = () => true;

const GifExerciseThree = () => {
    const isRatingG = useIfg();

    return NewGifs.map((newGif) => (
        <div>
            {isRatingG && (
                < Gif
                    key={newGif.id}
                    rating={newGif.rating}
                    title={newGif.title}
                    url={newGif.url}
                    uploadedDate={newGif.uploadedDate}
                    webp={newGif.webp}
                />
            )}
        </div>
    ));
};

export default GifExerciseThree;