import React from 'react'
import PageTitle from '../PageTitle'

const GameStoreGallery = () => {

    return (
        <div className="row game-store-game-gallery">
          <div className="col-12">
            <PageTitle name="GAMES"/>
            <img src={require("../../assets/Banner-Image.jpg")} />
          </div>
        </div>
    )
}

export default React.memo(GameStoreGallery)