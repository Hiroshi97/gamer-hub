import React, {useState, useEffect} from 'react'
import apicalypse from 'apicalypse';
import {REQUEST} from '../../../constants/constants';

export default function Games() {
    const [games, setGames] = useState([]);
    const [platform, setPlatform] = useState('6');
    const [selected, setSelected] = useState('6');

    async function fetchGameData(platform) {
        let fetchGames = [];
        try {
            const response = await apicalypse(REQUEST)
                    .fields('name, age_ratings, involved_companies.*, cover.*, genres.*, rating')
                    .where('rating >= 80 & platforms =' + platform)
                    .offset(0)
                    .limit(4)
                    .sort('popularity', 'asc')
                    .request('/games');
            fetchGames = response.data;
            console.log(response);
            fetchGames.forEach(async (game) => {
                game.cover.url = "https://" + game.cover.url.split("//")[1].replace("thumb", "1080p");
                game.rating = game.rating ? (game.rating / 10.0).toFixed(1) : null;
                if(game.genres)
                    game.genres = game.genres.reduce(((genres, genre) => genres + " " + genre.name ), "").split(" ").slice(1).join(", ");
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
            setGames(fetchGames);
        } catch (err){
            console.log(err.response);
        }
    }

    useEffect(() => {
        fetchGameData(platform);
    }, [platform])

    const handlePlatformClick = (e) => {
        e.preventDefault();
        setSelected(e.target.id)
        if (e.target.id === "0")
            setPlatform("(6, 48, 49)");
        else setPlatform(e.target.id);
    }

    //6 - PC, 48 - PS4, 49 - XBOX ONE, Switch - 130
    return (
        <div className="container games">
            <div className="row mt-5 platforms">
                <div className="col-12">
                    <h3 className="d-inline-block">Choose your platform: </h3>
                    
                    <a onClick={handlePlatformClick} id="0" href="#" className="d-inline-block platform-option px-2"><i className="fas fa-th-large pr-1"></i>All</a>
                    <a onClick={handlePlatformClick} id="6" href="#" className="d-inline-block platform-option active px-2"><i className="fab fa-windows pr-1"></i>PC</a>
                    <a onClick={handlePlatformClick} id="48" href="#" className="d-inline-block platform-option px-2"><i className="fab fa-playstation pr-1"></i>Playstation</a>
                    <a onClick={handlePlatformClick} id="49" href="#" className="d-inline-block platform-option px-2"><i className="fab fa-xbox pr-1"></i>Xbox</a>

                </div>
            </div>
            
            <div className="row mt-3 justify-content-center">
            {games.map(game => (
                <div key={game.id}  className="col-6 col-xs-6 col-sm-6 col-md-3 col-lg-3">
                    <div className="game-preview">
                            <div className="game-cover"><img src={game.cover.url} alt=""/></div>
                            <h4 className="text-uppercase font-weight-bold game-name">{game.name}</h4>
                            {game.rating ? <span className="game-rating">{game.rating}</span> : null}
                            <div className="game-info">
                                <p className="game-genres">{game.genres}</p>
                                {/* <p className="game-publisher">{game.involve_companies[0].name}</p> */}
                            </div>
                            <div className="text-center">
                                <p className="game-price">$9.99</p>
                                
                                <div className="game-platform ">{
                                    platform !== '6' 
                                    ? (platform === '48' 
                                        ? <i className="fab fa-playstation pr-1"></i> 
                                        : (platform !== "(6, 48, 49)" ? <i className="fab fa-xbox pr-1"></i>
                                                            : <div><i className="fab fa-xbox pr-1"></i><i className="fab fa-playstation pr-1"></i><i className="fab fa-windows pr-1"></i></div>))
                                    : <i className="fab fa-windows pr-1"></i>}</div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}
