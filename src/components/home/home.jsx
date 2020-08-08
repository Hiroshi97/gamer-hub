import React from 'react'
import Slider from './slider/slider';
import './home.scss';
import Games from './games/games';
import Prelaunch from './pre-launch/prelaunch';
import Category from './category/category';

export default function Home() {
    return (
        <div className="home-content">
            <Slider/>
            <Games/>
            {/* <Prelaunch/> */}
            <Category/>
        </div>
    )
}
