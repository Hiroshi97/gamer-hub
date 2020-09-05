import React, { useEffect, useState, useRef } from "react";
import PageTitle from "../../components/Reusable/PageTitle";
import { useParams, Link } from "react-router-dom";
import { FetchGameSuccess, FetchGameRequest } from "../../actions/GameActions";
import { getGamesById } from "../../api-call/gameAPI";
import { useDispatch, useSelector } from "react-redux";
import "./game-item.scss";
import { AddItem } from "../../actions/CartActions";
import Rating from "react-rating";
import ModalImage from "react-modal-image";
import { updateCart } from "../../api-call/cartAPI";
import { Toast, ToastBody } from "react-bootstrap";

export default function GameItem() {
  const { id } = useParams();
  const [gameInfo, setGameInfo] = useState(null);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.gameState.loading);
  const isDone = useRef(false);
  const isLoggedIn = useSelector((state) => state.authState.result);
  const [show, setShow] = useState(false);

  const handleAddItem = (game) => {
    dispatch(
      AddItem({
        id: game.id,
        name: game.game_title,
        img: game.img,
        price: 9.99,
        qty: 1,
      })
    );
    handleShow();
    if (isLoggedIn) updateCart();
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = React.useCallback(() => {
    setShow(false);
  });

  useEffect(() => {
    isDone.current = false;

    if (!isDone.current) {
      dispatch(FetchGameRequest());
      getGamesById(id).then((res) => {
        dispatch(FetchGameSuccess());
        setGameInfo(res[0]);
      });
    }

    return () => {
      isDone.current = true;
    };
  }, []);

  const renderSocialMediaIcons = () => (
    <>
      <a className="text-white" href="#">
        <i className="fab fa-facebook mx-2"></i>
      </a>
      <a className="text-white" href="#">
        <i className="fab fa-google-plus mr-2"></i>
      </a>
      <a className="text-white" href="#">
        <i className="fab fa-pinterest mr-2"></i>
      </a>
    </>
  );

  return (
    <div className="container-fluid game-item-page">
      <div className="container game-item-content">
        <div className="row game-item-custom-breadcrumb mt-4">
          <ul>
            <li>
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/store" className="text-white active">
                Store
              </Link>
            </li>
            <li>
              <Link to="#" className="text-white active">
                Game
              </Link>
            </li>
          </ul>
        </div>
        <PageTitle name="GAME" />

        {!isLoading && gameInfo ? (
          <div className="row game-item-preview pb-5">
            <div className="col-xs-12 col-sm-6 game-cover">
              <img src={gameInfo.img} alt="" />
              <div className="row game-gallery">
                {gameInfo.gallery.length > 0 &&
                  gameInfo.gallery.map((image, index) => (
                    <div key={index} className="col-3 mt-3 game-gallery-col">
                      <ModalImage
                        small={image}
                        medium={image}
                        alt={`screenshot-${index}`}
                      />
                      <div className="gallery-image-overlay text-center">
                        <i className="far fa-eye"></i>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 game-preview my-auto">
              <h4 className="font-weight-bold game-preview-title">
                {gameInfo.game_title}
              </h4>
              <Rating
                readonly
                emptySymbol={<i className="text-danger far fa-star mr-2"></i>}
                fullSymbol={<i className="text-danger fas fa-star mr-2"></i>}
                initialRating={3.5}
              />
              <p className="game-preview-overview">
                {gameInfo.overview.length
                  ? gameInfo.overview.split(".").slice(0, 2).join(".") + "."
                  : null}
              </p>
              <h5 className="font-weight-bold game-preview-price">
                {"$ 9.99"}
              </h5>
              <button
                className="btn text-uppercase btn-danger mt-1 mb-1 mr-2"
                onClick={() => handleAddItem(gameInfo)}
                disabled={show}
              >
                {show ? "Added" : "Add to cart"} <i className='fas fa-shopping-basket'></i>
              </button>
              <button className="btn text-uppercase btn-dark mt-1 mb-1">
                Add to wishlist <i className="fas fa-heart"></i>
              </button>

              <div className="game-preview-misc mt-3">
                <p className="d-block">
                  SKU: 300-200-503
                  <br />
                  <span className="font-weight-bold">Categories:</span>
                  {gameInfo.genres.map((genre, index) => (
                    <span key={index}>{(index ? ", " : " ") + genre}</span>
                  ))}
                  <br />
                  <span className="font-weight-bold">Rating:</span>
                  {" " + gameInfo.rating}
                </p>
              </div>
              <p>
                <span className="font-weight-bold">Share this game:</span>
                {renderSocialMediaIcons()}
              </p>
            </div>
          </div>
        ) : (
          <div className="col mt-5">
            <img
              className="d-block mx-auto"
              src="https://mentalapp.org/app/library/images/loading.gif"
            />
          </div>
        )}
      </div>
      <Toast
        style={{
          position: "fixed",
          bottom: "20px" /* Place the button at the bottom of the page */,
          right: "30px" /* Place the button 30px from the right */,
          zIndex: 99 /* Make sure it does not overlap */,
          backgroundColor: "#5cb85c",
        }}
        onClose={handleClose}
        show={show}
        autohide
        delay={1000}
      >
        <ToastBody><i className="fas fa-check-circle"></i> Added successfully!</ToastBody>
      </Toast>
    </div>
  );
}
