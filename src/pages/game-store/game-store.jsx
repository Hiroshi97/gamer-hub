import React, { useEffect } from "react";
import "./game-store.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getGamesBasedOnPlatform } from "../../apis/gameAPI";
import StarRatings from "react-star-ratings";

export default function GameStore() {
  const [list, setList] = useState([]);
  const [platform, setPlatform] = useState("4919");
//   const [category, setCategory] = useState("4");
  const [page, setPage] = useState(1);
  useEffect(() => {
    getGamesBasedOnPlatform(platform, page).then((res) => {
      setList(res);
    });
  }, [page, platform]);

  const handlePagination = (e) => {
    e.preventDefault();
    console.log(parseInt(e.target.id));
    if (e.target.id !== "next" && e.target.id !== "previous")
      setPage(parseInt(e.target.id));
    else if (e.target.id === "next") setPage(page + 1);
    else setPage(page - 1);
  };

  const handlePlatform = (e) => {
      e.preventDefault();
      setPage(1);
      setPlatform(e.target.id.split('-')[1]);
  }

  return (
    <div className="container-fluid game-store-page">
      <div className="container game-store-content">
        <div className="row game-store-custom-breadcrumb">
          <ul>
            <li>
              <Link to="/" className="text-white">Home</Link>
            </li>
            <li>
              <Link to="#" className="text-white active">
                Store
              </Link>
            </li>
          </ul>
        </div>
        {/* GALLERY */}
        <div className="row game-store-game-gallery">
          <div className="col-12">
            <h3 className="game-store-category-name font-weight-bold">
              <span id="selected-category" className="text-uppercase"></span>{" "}
              GAMES
            </h3>
            <img src={require("../../assets/Banner-Image.jpg")} />
          </div>
        </div>
        {/* PLATFORMS */}
        <div className="row game-store-platforms mt-3">
          <div className="col-12 col-md-4">
            <div className="card bg-dark">
              <div className="card-body row justify-content-around align-items-center">
                <i className="fab fa-playstation fa-2x"></i>
                <div className="d-block">
                  <h5 className="card-title">Playstation</h5>
                  <a id="plat-4919" onClick={handlePlatform} href="/#" className="card-text text-danger">
                    VIEW GAMES
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card bg-dark">
              <div className="card-body d-flex justify-content-around align-items-center">
                <i className="fab fa-xbox fa-2x"></i>
                <div className="d-block">
                  <h5 className="card-title">Xbox</h5>
                  <a id="plat-4920" onClick={handlePlatform} href="/#" className="card-text text-danger">
                    VIEW GAMES
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card bg-dark">
              <div className="card-body d-flex justify-content-around align-items-center">
                <i className="fab fa-windows fa-2x"></i>
                <div className="d-block">
                  <h5 className="card-title">PC</h5>
                  <a id="plat-1" onClick={handlePlatform} href="/#" className="card-text text-danger">
                    VIEW GAMES
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* OPTIONS */}
        {/* GAME LIST */}
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
                      <p className="game-genres">{game.genres.map(genre => (<span className="badge badge-secondary mr-2 mt-3">{genre}</span>))}</p>
                      <p className="game-price">$9.99</p>
                      <button className="btn btn-danger">Add to cart</button>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
        <div className="row">
          <div className="game-store-game-list-pagination mt-5 ml-auto mr-auto">
            <nav aria-label="...">
              <ul className="pagination">
                <li className={"page-item" + (page === 1 ? " disabled" : "")}>
                  <a
                    id="previous"
                    onClick={handlePagination}
                    className="page-link"
                    href="#"
                    tabIndex="-1"
                  >
                    Previous
                  </a>
                </li>
                <li className="page-item active">
                  <a
                    onClick={handlePagination}
                    id={page}
                    className="page-link"
                    href="#"
                  >
                    {page}
                  </a>
                </li>
                <li className={"page-item"}>
                  <a
                    onClick={handlePagination}
                    id={page + 1}
                    className="page-link"
                    href="#"
                  >
                    {page + 1}
                  </a>
                </li>
                <li className="page-item">
                  <a
                    onClick={handlePagination}
                    id={page + 2}
                    className="page-link"
                    href="#"
                  >
                    {page + 2}
                  </a>
                </li>
                <li className="page-item">
                  <a
                    id="next"
                    onClick={handlePagination}
                    className="page-link"
                    href="#"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
