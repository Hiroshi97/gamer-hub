import React from 'react'

export default function GameStoreGallery() {
    return (
        <div className="row game-store-game-gallery">
          <div className="col-12">
            <h3 className="game-store-category-name font-weight-bold">
              <span id="selected-category" className="text-uppercase"></span>{" "}
              GAMES
            </h3>
            <img src={require("../../../assets/Banner-Image.jpg")} />
          </div>
        </div>
    )
}
