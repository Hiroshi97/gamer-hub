import React, {useState, useEffect, useRef} from 'react'
import {getGamesBasedOnPlatform as getGames} from '../../../apis/gameAPI';
import {NavLink } from 'react-router-dom';

export default function Games() {
    const [games, setGames] = useState([]);
    const [platform, setPlatform] = useState('0');
    const isDone = useRef(false);

    useEffect(() => {
        isDone.current = false;
        getGames(platform, 1, 4).then(gamesList => {
            if(!isDone.current)
                setGames(gamesList);
        });
        return () => {isDone.current = true};
    }, [platform])

    const handlePlatformClick = (e) => {
        e.preventDefault();
        console.log(e.target.id)
        if (platform !== e.target.id.split("-")[1])
            setPlatform(e.target.id.split("-")[1]);
    }

    return (
        <div className="container games">
            <div className="row mt-5 platforms">
                <div className="col-12">
                    <h3 className="d-inline-block title">Choose your platform: </h3>
                    
                    <NavLink activeClassName={platform === '0' ? 'active': ''} onClick={handlePlatformClick} id="plat-0" to="/#" className="d-inline-block platform-option px-2"><i className="fas fa-th-large pr-1"></i>All</NavLink>
                    <NavLink activeClassName={platform === '1' ? 'active': ''} onClick={handlePlatformClick} id="plat-1" to="/#" className="d-inline-block platform-option px-2"><i className="fab fa-windows pr-1"></i>PC</NavLink>
                    <NavLink activeClassName={platform === '4919' ? 'active': ''} onClick={handlePlatformClick} id="plat-4919" to="/#" className="d-inline-block platform-option px-2"><i className="fab fa-playstation pr-1"></i>Playstation</NavLink>
                    <NavLink activeClassName={platform === '4920' ? 'active': ''} onClick={handlePlatformClick} id="plat-4920" to="/#" className="d-inline-block platform-option px-2"><i className="fab fa-xbox pr-1"></i>Xbox</NavLink>

                </div>
            </div>
            
            <div className="row mt-3 justify-content-center">
            {games ? games.map(game => (
                <div key={game.id}  className="col-6 col-xs-6 col-sm-6 col-md-3 col-lg-3">
                    <div className="game-preview">
                            <div className="game-cover"><img src={game.img} alt=""/></div>
                            <h4 className="text-uppercase font-weight-bold game-name">{game.game_title}</h4>
                            {/* {game.rating ? <span className="game-rating">{game.rating}</span> : null} */}
                            <div className="game-info">
                                <p className="game-genres">{game.genres.map(genre => genre)}</p>
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
            )) : <div className="col text-center error-no-list"><p>Something wrong. Please try again!</p></div>}
            </div>
        </div>
    )
}
