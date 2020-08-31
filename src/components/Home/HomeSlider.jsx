import React from "react";
import { Link } from "react-router-dom";

export default function HomeSlider() {
  return (
    <div
      id="carouselGameIndicators"
      className="carousel carousel-fade slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators justify-content-center">
        <li
          data-target="#carouselGameIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselGameIndicators" data-slide-to="1"></li>
        <li data-target="#carouselGameIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item carousel-item-overlay item-1 active" data-interval="2000">
         
            <div className="container carousel-item-caption d-none d-md-block">
                <div className="game-title"><img src="https://i.pinimg.com/originals/6d/b4/85/6db48503abb29129a46ff78cfa354925.png"/></div>
                <div className="carousel-item-info mt-3">
                    <Link to="/store/game/16489" className="d-inline-block buynow-block text-center py-2 px-4 font-weight-bold">Buy Now</Link>
                </div>
            </div>
        </div>
        <div className="carousel-item carousel-item-overlay item-2" data-interval="2000">
        <div className="container carousel-item-caption d-none d-md-block">
                <div className="game-title"><img src="https://www.pngmart.com/files/2/Batman-Arkham-Knight-Transparent-Background.png"/></div>
                <div className="carousel-item-info mt-3">
                    <Link to="/store/game/9058" className="d-inline-block buynow-block text-center py-2 px-4 font-weight-bold">Buy Now</Link>
                </div>
            </div>
        </div>
        <div className="carousel-item carousel-item-overlay item-3" data-interval="2000">
          <div className="container carousel-item-caption d-none d-md-block">
                <div className="game-title"><img src="https://pluspng.com/img-png/battlefield-logo-png-battlefield-png-images-free-img-3160x676.png"/></div>
                <div className="carousel-item-info mt-3">
                    <Link to="/store/game/36615" className="d-inline-block buynow-block text-center py-2 px-4 font-weight-bold">Buy Now</Link>
                </div>
            </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselGameIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselGameIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}
