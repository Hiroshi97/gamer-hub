import {Carousel} from '3d-react-carousal';
import React, {useEffect, useState, useRef} from 'react';
import { getComingSoonGames as fetchGameData } from '../../api-call/gameAPI';

export default function HomePrelaunch() {
    const [slides, setSlides]= useState([]);
    const isDone = useRef(false);
    //6 - PC, 48 - PS4, 49 - XBOX ONE, Switch - 130
    useEffect(() => { 
        isDone.current = false;
        fetchGameData().then(games => 
            {
                if(!isDone.current)
                    setSlides(games)
            });
            return () => {isDone.current = true;}
        }, [])
    
        return (
            <div className="container mt-3">
                <h3 className="d-inline-block title">Pre-launch games: </h3>
                <div className="row mt-3">
                    <div className="col-12 prelaunch mt-3">
                        {slides.length > 0 ? <Carousel slides={slides} autoplay={true} interval={4000}/> : null }
                    </div>
                </div>
            </div>
        )

}
