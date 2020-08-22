import React from 'react'
import HomeSlider from '../../components/Home/HomeSlider';
import HomeGames from '../../components/Home/HomeGames';;
import HomePrelaunch from '../../components/Home/HomePrelaunch';;
import HomeCategory from '../../components/Home/HomeCategory';
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