export const REQUEST = {
  queryMethod: "body",
  method: "post",
  baseURL: "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "user-key": process.env.REACT_APP_IGDB_USER_KEY,
    Accept: "application/json",
    Origin: "X-Requested-With",
  },
  responseType: "json",
};

//API KEY
export const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;

export const GAME_API_KEY = process.env.REACT_APP_THEGAMESDB_API_KEY;

export const DATABASE_NAME = process.env.REACT_APP_DATABASE_NAME;

//REGEX VALIDATION
export const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

export const NAME_REGEX = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

// GAME GENRES
export const GAME_GENRES = [
  {
    id: 0,
    name: "Unknown",
  },
  {
    id: 1,
    name: "Action",
  },
  {
    id: 2,
    name: "Adventure",
  },
  {
    id: 3,
    name: "Construction and Management Simulation",
  },
  {
    id: 4,
    name: "Role-Playing",
  },
  {
    id: 5,
    name: "Puzzle",
  },
  {
    id: 6,
    name: "Strategy",
  },
  {
    id: 7,
    name: "Racing",
  },
  {
    id: 8,
    name: "Shooter",
  },
  {
    id: 9,
    name: "Life Simulation",
  },
  {
    id: 10,
    name: "Fighting",
  },
  {
    id: 11,
    name: "Sports",
  },
  {
    id: 12,
    name: "Sandbox",
  },
  {
    id: 13,
    name: "Flight Simulator",
  },
  {
    id: 14,
    name: "MMO",
  },
  {
    id: 15,
    name: "Platform",
  },
  {
    id: 16,
    name: "Stealth",
  },
  {
    id: 17,
    name: "Music",
  },
  {
    id: 18,
    name: "Horror",
  },
  {
    id: 19,
    name: "Vehicle Simulation",
  },
  {
    id: 20,
    name: "Board",
  },
  {
    id: 21,
    name: "Education",
  },
  {
    id: 22,
    name: "Family",
  },
  {
    id: 23,
    name: "Party",
  },
  {
    id: 24,
    name: "Productivity",
  },
  {
    id: 25,
    name: "Quiz",
  },
  {
    id: 26,
    name: "Utility",
  },
  {
    id: 27,
    name: "Virtual Console",
  },
  {
    id: 28,
    name: "Unofficial",
  },
  {
    id: 29,
    name: "GBA Video / PSP Video",
  },
];
