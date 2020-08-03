import {Carousel} from '3d-react-carousal';
import apicalypse from 'apicalypse';
import React, {useEffect, useState} from 'react';


export default function Prelaunch() {
    const [slides, setSlides]= useState([]);
    const request = {
        queryMethod: 'body',
        method: 'post',
        baseURL: 'https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'user-key': 'bcfc2527f2248a1ab7d5625a20c90223',
            'Accept': 'application/json'
        },
        responseType: 'json'
    }

    async function fetchData() {
        const now = Date.now();
        let coming_soon = [];
        const response = await apicalypse(request)
                .fields('name, age_ratings, cover.*, genres, rating, release_dates')
                .where(`platforms = 48 & release_dates.date >${now}`)
                .limit(5)
                .request('/games');
        coming_soon = response.data;
        coming_soon.forEach(game => game.cover.url = "https://" + game.cover.url.split("//")[1].replace("thumb", "720p"));
        coming_soon = coming_soon.map((game, index) => (<img src={game.cover.url} alt={index.toString()} />));
        setSlides(coming_soon);
    }

    //6 - PC, 48 - PS4, 49 - XBOX ONE, Switch - 130
    useEffect(() => { fetchData() }, [])
    
    if (slides.length > 0)
        return (
            <div className="container">
                <div className="row">
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
