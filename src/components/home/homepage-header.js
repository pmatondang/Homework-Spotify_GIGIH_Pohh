import React from 'react';

import logo from '../../logo.svg';
import HomePageMenu from './homepage-menu';

export default function HomePageHeader() {
    return (
        <header className="App-header">
            <div className="top-wrapper">
                <div className="container">
                    <div className="header-left">
                        <h1 className="logo">
                            <img src={logo} className="App-logo" alt="logo" />
                            <b>REACT PLAYLIST</b>
                        </h1>
                    </div>

                    <HomePageMenu />

                </div>
            </div>
        </header>
    );
}