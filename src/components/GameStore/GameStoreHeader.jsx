import React from 'react'
import PageTitle from '../Reusable/PageTitle'

const GameStoreHeader = () => {

    return (
        <div className="row game-store-game-header">
          <div className="col-12">
            <PageTitle name="STORE"/>
            <img src={require("../../assets/Banner-Image.jpg")} />
          </div>
        </div>
    )
}

export default React.memo(GameStoreHeader)