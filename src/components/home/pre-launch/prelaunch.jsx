import {Carousel} from '3d-react-carousal';
import apicalypse from 'apicalypse';
import React, {useEffect, useState} from 'react';
import {REQUEST} from '../../../constants/constants';

export default function Prelaunch() {
    const [slides, setSlides]= useState([]);

    async function fetchData() {
        const now = Date.now();
        let coming_soon = [];
        const response = await apicalypse(REQUEST)
                .fields('name, cover.*, genres.*, rating')
                .where(`platforms = 48 & release_dates.date >${now}`)
                .offset(25)
                .limit(5)
                .request('/games');
        coming_soon = response.data;
        console.log(coming_soon)
        coming_soon.forEach(game => game.cover.url = "https://" + game.cover.url.split("//")[1].replace("thumb", "720p"));
        coming_soon = coming_soon.map((game, index) => (<img src={game.cover.url} alt={index.toString()} />));
        setSlides(coming_soon);
    }

    //6 - PC, 48 - PS4, 49 - XBOX ONE, Switch - 130
    useEffect(() => { fetchData() }, [])
    
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
