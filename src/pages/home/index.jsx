import React from 'react'
import HomeSlider from '../../components/Home/HomeSlider';
import HomeGames from '../../components/Home/HomeGames';
import HomePrelaunch from '../../components/Home/HomePrelaunch';
import HomeCategory from '../../components/Home/HomeCategory';
import './home.scss';
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    return (
        <div className="home-content">
            <HomeSlider/>
            <HomeGames/>
            {/* <HomePrelaunch/> */}
            <HomeCategory/>
        </div>
    )
}