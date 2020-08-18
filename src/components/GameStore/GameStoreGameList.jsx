import React from "react";
import StarRatings from "react-star-ratings";
import PropTypes from "prop-types";
import { AddItem } from "../../actions/CartActions";
import { useDispatch } from "react-redux";
const GameStoreGameList = ({ list, isLoading }) => {
  const dispatch = useDispatch();
  return (
    <div className="row game-store-game-list justify-content-between">
      {list && list.length > 0 && !isLoading ? (
        list.map((game, index) => (
          <div key={index} className="col-12 col-sm-6 mt-5">
            <div className="row justify-content-center">
              <div className="col-12 col-md-6 game-cover">
                <img src={game.img} />
              </div>
              <div className="col-12 col-md-6 game-preview">
                <h5 className="game-title">{game.game_title}</h5>
                <StarRatings
                  rating={3.5}
                  starRatedColor="#d4183b"
                  starDimension="15px"
                  numberOfStars={5}
                  name="rating"
                />
                <p className="game-genres">
                  {game.genres.map((genre, index) => (
                    <span
                      key={index}
                      className="badge badge-secondary mr-2 mt-3"
                    >
                      {genre}
                    </span>
                  ))}
                </p>
                <p className="game-rating">{game.rating}</p>
                <p className="game-price">$9.99</p>
                <button
                  className="btn btn-danger"
                  onClick={() =>
                    dispatch(
                      AddItem({
                        id: game.id,
                        name: game.game_title,
                        img: game.img,
                        price: 9.99,
                        qty: 1,
                      })
                    )
                  }
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col mt-5">
          <img
            className="d-block mx-auto"
            src="https://mentalapp.org/app/library/images/loading.gif"
          />
        </div>
      )}
    </div>
  );
};

GameStoreGameList.propTypes = {
  list: PropTypes.array,
};

export default React.memo(GameStoreGameList);
