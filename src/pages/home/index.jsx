import React from 'react'
import HomeSlider from './home-slider';
import HomeGames from './home-games';
import HomePrelaunch from './home-prelaunch';
import HomeCategory from './home-category';
import './home.scss';

export default function Home() {
    return (
        <div className="home-content">
            <HomeSlider/>
            <HomeGames/>
            {/* <HomePrelaunch/> */}
            <HomeCategory/>
        </div>
    )
}