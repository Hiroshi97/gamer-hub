import React from 'react'
import PropTypes from 'prop-types';

export default function GameStorePlatformOptions({handlePlatform}) {
    const options = [
        {
            id: "plat-1",
            icon: "fab fa-windows fa-2x",
            title: "PC",
        },
        {
            id: "plat-4919",
            icon: "fab fa-playstation fa-2x",
            title: "Playstation",
        },{
            id: "plat-4920",
            icon: "fab fa-xbox fa-2x",
            title: "Xbox",
        }
    ]

    const handleChangePlatform = (e) => {
        e.preventDefault();
        handlePlatform(e);
    }
    return (
        <div className="row game-store-platforms mt-3">
        {options.map(option => 
          <div className="col-md-4 mt-3">
            <div className="card bg-dark">
              <div className="card-body row justify-content-around align-items-center">
                <i className={option.icon}></i>
                <div className="d-block">
                  <h5 className="card-title">{option.title}</h5>
                  <a id={option.id} onClick={handleChangePlatform} href="/#" className="card-text text-danger">
                    VIEW GAMES
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        </div>

    )
}

GameStorePlatformOptions.propTypes = {
  handlePlatform: PropTypes.func,
}
