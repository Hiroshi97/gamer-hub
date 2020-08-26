import React from "react";
import PropTypes from "prop-types";
import { AddItem } from "../../actions/CartActions";
import { useSelector, useDispatch } from "react-redux";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { updateCart } from "../../api-call/cartAPI";

const GameStoreGameList = ({ list, isLoading }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.authState.result);
  const handleAddItem = (game) => {
    dispatch(
      AddItem({
        id: game.id,
        name: game.game_title,
        img: game.img,
        price: 9.99,
        qty: 1,
      }));
    if (isLoggedIn)
      updateCart();
  }
  return (
    <div className="row game-store-game-list justify-content-between">
      {list && list.length > 0 && !isLoading ? (
        list.map((game, index) => (
          <div key={index} className="col-12 col-sm-6 mt-5">
            <div className="row justify-content-center">
              <div className="col-12 col-md-6 game-cover">
                <Link to={`/store/game/${game.id}`}>
                  <img src={game.img} />
                </Link>
              </div>
              <div className="col-12 col-md-6 game-preview">
                <h5 className="game-title">{game.game_title}</h5>
                <Rating
                  readonly
                  emptySymbol={<i className="text-danger far fa-star mr-2"></i>}
                  fullSymbol={<i className="text-danger fas fa-star mr-2"></i>}
                  initialRating={3.5}
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
                  onClick={()=>handleAddItem(game)}
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
  isLoading: PropTypes.bool,
};

export default React.memo(GameStoreGameList);
