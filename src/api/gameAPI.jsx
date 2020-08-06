import React from 'react';
import apicalypse from 'apicalypse';
import {REQUEST} from '../constants/constants';

//GET GAMES BASED ON PLATFORM
export const getGamesBasedOnPlatform = async(platform) => {
    if (platform === "0")
        platform = "(6,48,49)";
    let fetchGames = [];
    try {
        const response = await apicalypse(REQUEST)
                .fields('name, age_ratings, involved_companies.*, cover.*, genres.*, rating')
                .where('rating >= 80 & platforms =' + platform)
                .offset(20)
                .limit(4)
                .sort('popularity', 'asc')
                .request('/games');
        fetchGames = response.data;
        fetchGames.forEach(async (game) => {
            game.cover.url = "https://" + game.cover.url.split("//")[1].replace("thumb", "1080p");
            game.rating = game.rating ? (game.rating / 10.0).toFixed(1) : null;
            if(game.genres && game.genres.length > 0)
                game.genres = game.genres.reduce(((genres, genre) => genres + " " + genre.name ), "").split(" ").slice(1, 5).join(", ");
            else game.genres = 'Unknown'
                // console.log(game.involved_companies[0]);
            // const response = await apicalypse(request)
            //     .fields('name')
            //     .where('id = ' + game.involved_companies[0].id)
            //     .limit(4)
            //     .sort('popularity', 'desc')
            //     .request('/companies');
            // game.involve_companies = response.data;
            // console.log(game.involve_companies);
        });
        return fetchGames;
    } catch (err){
        console.log(err.response);
    }
}

//GET COMING SOON GAME
export const getComingSoonGames = async () => {
    const now = Date.now();
    let coming_soon = [];
    const response = await apicalypse(REQUEST)
            .fields('name, cover.*, genres.*, rating')
            .where(`platforms = 48 & release_dates.date >${now}`)
            .offset(7)
            .limit(5)
            .request('/games');
    coming_soon = response.data;
    console.log(coming_soon)
    coming_soon.forEach(game => game.cover.url = "https://" + game.cover.url.split("//")[1].replace("thumb", "720p"));
    coming_soon = coming_soon.map((game, index) => (<img src={game.cover.url} alt={index.toString()} />));
    return coming_soon;
}