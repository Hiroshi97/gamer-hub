import React from 'react'
import StarRatings from "react-star-ratings";
import PropTypes from 'prop-types';

export default function GameStoreGameList({list}) {
    return (
        <div className="row game-store-game-list justify-content-center">
          {list && list.length > 0
            ? list.map((game, index) => (
                <div key={index} className="col-6 col-sm-6 mt-5">
                  <div className="row justify-content-center">
                    <div className="col-12 col-md-6 game-cover">
                      <img src={game.img} />
                    </div>
                    <div className="col-12 col-md-6 game-preview m-0 p-0">
                      <h5>{game.game_title}</h5>
                      <StarRatings
                        // rating={game.rating}
                        rating={3.5}
                        starRatedColor="rgb(220, 53, 69)"
                        starDimension="15px"
                        numberOfStars={5}
                        name="rating"
                      />
                      <p className="game-genres">{game.genres.map((genre, index) => (<span key={index} className="badge badge-secondary mr-2 mt-3">{genre}</span>))}</p>
                      <p className="game-price">$9.99</p>
                      <button className="btn btn-danger">Add to cart</button>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
    )
}

GameStoreGameList.propTypes = {
    list: PropTypes.array
  };
