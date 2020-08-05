import {Carousel} from '3d-react-carousal';
import React, {useEffect, useState} from 'react';
import { getComingSoonGames as fetchGameData } from '../../../api/gameAPI';

export default function Prelaunch() {
    const [slides, setSlides]= useState([]);

    //6 - PC, 48 - PS4, 49 - XBOX ONE, Switch - 130
    useEffect(() => { fetchGameData().then(games => {setSlides(games)}) }, [])
    
    if (slides.length > 0)
        return (
            <div className="container">
                <div className="row mt-4">
                    <div className="col-12 prelaunch">
                        <h3 className="d-inline-block">Pre-launch games: </h3>             
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12 prelaunch mt-3">
                        <Carousel slides={slides} autoplay={true} interval={6000}/>
                    </div>
                </div>
            </div>
        )
    else return (null);
}
