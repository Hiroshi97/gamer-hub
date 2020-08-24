import React from "react";
import apicalypse from "apicalypse";
import { REQUEST, GAME_GENRES, GAME_API_KEY } from "../constants/constants";
import Axios from "axios";

export const getGamesBasedOnPlatform = async (platform, page, limit = 0) => {
  try {
    let fetchGames = [];
    if (platform === "0") platform = "1,4919,4920";
    const url = `https://cors-anywhere.herokuapp.com/https://api.thegamesdb.net/v1/Games/ByPlatformID?apikey=${GAME_API_KEY}&id=${platform}&fields=rating,genres,overview,publishers&include=boxart&page=${page}`;

    const response = await Axios.get(url);
    fetchGames = response.data.data.games;

    //Get the boxart
    let covers = Object.values(response.data.include.boxart.data);

    //Get the name of each genre
    fetchGames = fetchGames.map((game, index) => {
      if (game.genres && game.genres.length > 0)
        //Check whether a game has its genres
        game.genres = game.genres.map((genre) => GAME_GENRES[genre].name);
      else game.genres = [GAME_GENRES[0].name];

      let cover_img = "";

      //Generate an url of cover img
      covers[index].some((cover) => {
        if (cover.side === "front") {
          cover_img =
            "https://cdn.thegamesdb.net/images/medium/" + cover.filename;
          return true;
        }
      });

      return { ...game, img: cover_img };
    });

    //Limit the length of games
    if (limit) return fetchGames.slice(0, limit);
    return fetchGames;
  } catch (err) {
    console.log(err);
  }
};

export const getGamesById = async (id) => {
  let fetchGame = [];
  const url = `https://cors-anywhere.herokuapp.com/https://api.thegamesdb.net/v1/Games/ByGameID?apikey=${GAME_API_KEY}&id=${id}&fields=rating,genres,overview,publishers&include=boxart`;

  const response = await Axios.get(url);
  fetchGame = response.data.data.games;

  //Get the boxart
  let covers = Object.values(response.data.include.boxart.data);

  //Get the name of each genre
  fetchGame = fetchGame.map((game, index) => {
    if (game.genres && game.genres.length > 0)
      //Check whether a game has its genres
      game.genres = game.genres.map((genre) => GAME_GENRES[genre].name);
    else game.genres = [GAME_GENRES[0].name];

    let cover_img = "";

    //Generate an url of cover img
    covers[index].some((cover) => {
      if (cover.side === "front") {
        cover_img = "https://cdn.thegamesdb.net/images/medium/" + cover.filename;
        return true;
      }
    });

    return { ...game, img: cover_img };
  });

  return fetchGame;
};

//GET COMING SOON GAME
export const getComingSoonGames = async () => {
  const now = Date.now();
  let coming_soon = [];
  const response = await apicalypse(REQUEST)
    .fields("name, cover.*, genres.*, rating")
    .where(`platforms = 48 & release_dates.date >${now} & cover != null`)
    .offset(0)
    .limit(5)
    .request("/games");
  coming_soon = response.data;
  coming_soon.forEach(
    (game) =>
      (game.cover.url =
        "https://" + game.cover.url.split("//")[1].replace("thumb", "720p"))
  );
  coming_soon = coming_soon.map((game, index) => (
    <img src={game.cover.url} alt={index.toString()} />
  ));
  return coming_soon;
};
