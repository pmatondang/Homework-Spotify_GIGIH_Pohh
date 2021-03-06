import React from 'react';

const Gif = {
    id: '4HrBfVJJveBNS9ytSk',
    title: 'Nintendo Plotting   GIF by Gaming GIFs',
    uploadedDate: '2018-04-03 15:21:50',
    url: 'https://media4.giphy.com/media/4HrBfVJJveBNS9ytSk/200w.gif?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=200w.gif&ct=g',
    webp: 'https://media4.giphy.com/media/4HrBfVJJveBNS9ytSk/giphy.webp?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=giphy.webp&ct=g',
}

const ShowGif = () => {
    return (
        <div className="top-wrapper">
            <div className="container img">
                <p>{Gif.title}</p>
                <img src={Gif.url} alt="gif yang di ambil dari url" />
                <a href={Gif.webp}>Click Me</a>
            </div>
        </div>
    )
}

export { Gif, ShowGif };
