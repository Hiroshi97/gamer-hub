import React, {useState, useEffect} from 'react'
import {getGamesBasedOnPlatform as getGames} from '../../../api/gameAPI';
import {NavLink } from 'react-router-dom';

export default function Games() {
    const [games, setGames] = useState([]);
    const [platform, setPlatform] = useState('6');
    
    useEffect(() => {
        getGames(platform).then(gamesList => {
            setGames(gamesList);
        });
    }, [platform])

    const handlePlatformClick = (e) => {
        e.preventDefault();
        setPlatform(e.target.id);
    }

    //6 - PC, 48 - PS4, 49 - XBOX ONE, Switch - 130
    return (
        <div className="container games">
            <div className="row mt-5 platforms">
                <div className="col-12">
                    <h3 className="d-inline-block">Choose your platform: </h3>
                    
                    <NavLink activeClassName={platform === '0' ? 'active': ''} onClick={handlePlatformClick} id="0" to="/#" className="d-inline-block platform-option px-2"><i className="fas fa-th-large pr-1"></i>All</NavLink>
                    <NavLink activeClassName={platform === '6' ? 'active': ''} onClick={handlePlatformClick} id="6" to="/#" className="d-inline-block platform-option px-2"><i className="fab fa-windows pr-1"></i>PC</NavLink>
                    <NavLink activeClassName={platform === '48' ? 'active': ''} onClick={handlePlatformClick} id="48" to="/#" className="d-inline-block platform-option px-2"><i className="fab fa-playstation pr-1"></i>Playstation</NavLink>
                    <NavLink activeClassName={platform === '49' ? 'active': ''} onClick={handlePlatformClick} id="49" to="/#" className="d-inline-block platform-option px-2"><i className="fab fa-xbox pr-1"></i>Xbox</NavLink>

                </div>
            </div>
            
            <div className="row mt-3 justify-content-center">
            {games ? games.map(game => (
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
                                        : (platform !== "0" ? <i className="fab fa-xbox pr-1"></i>
                                                            : <div><i className="fab fa-xbox pr-1"></i><i className="fab fa-playstation pr-1"></i><i className="fab fa-windows pr-1"></i></div>))
                                    : <i className="fab fa-windows pr-1"></i>}</div>
                        </div>
                    </div>
                </div>
            )) : null}
            </div>
        </div>
    )
}
