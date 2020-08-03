import React from 'react'

export default function Games() {
    return (
        <div className="container games">
            <div className="row mt-5 platforms">
                <div className="col-12">
                    <h3 className="d-inline-block">Choose your platform: </h3>
                    <h5 className="d-inline-block platform-option px-2"><i className="fas fa-th-large pr-1"></i>All</h5>
                    <h5 className="d-inline-block platform-option px-2"><i className="fab fa-playstation pr-1"></i>Playstation</h5>
                    <h5 className="d-inline-block platform-option px-2"><i className="fab fa-xbox pr-1"></i>Xbox</h5>
                    <h5 className="d-inline-block platform-option px-2"><i className="fab fa-windows pr-1"></i>PC</h5>
                </div>
            </div>
            <div className="row mt-3">

                <div className="col-6 col-xs-6 col-sm-6 col-md-3 col-lg-3">
                    <div className="game-preview">
                    <div className="game-cover"><img src="https://wallpaperplay.com/walls/full/2/6/b/172777.jpg" alt=""/></div>
                        <h4 className="text-uppercase font-weight-bold game-name">Battlefield</h4>
                        <span className="game-rating">9.7</span>
                        <div className="game-info">
                            <p className="game-genres">FPS, Shooting</p>
                            <p className="game-publisher">abc</p>
                        </div>
                        <div className="text-center">
                            <p className="game-price">$9.99</p>
                            <p className="game-platform "><i className="fab fa-playstation pr-1"></i></p>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-xs-6 col-sm-6 col-md-3 col-lg-3">
                    <div className="game-preview">
                    <div className="game-cover"><img src="https://uhdwallpapers.org/uploads/converted/18/04/25/spider-man-from-the-video-game-1080x1920_76588-mm-90.jpg" alt=""/></div>
                        <h4 className="text-uppercase font-weight-bold game-name">Spider-Man: Marvel</h4>
                        <span className="game-rating">8.5</span>
                        <div className="game-info">
                            <p className="game-genres">FPS, Shooting</p>
                            <p className="game-publisher">abc</p>
                        </div>
                        <div className="text-center">
                            <p className="game-price">$9.99</p>
                            <p className="game-platform "><i className="fab fa-windows pr-1"></i><i className="fab fa-playstation pr-1"></i><i className="fab fa-xbox pr-1"></i></p>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-xs-6 col-sm-6 col-md-3 col-lg-3">
                    <div className="game-preview">
                    <div className="game-cover"><img src="https://mfiles.alphacoders.com/588/588756.jpg" alt=""/></div>
                    <h4 className="text-uppercase font-weight-bold game-name">Destiny</h4>
                    <span className="game-rating">8.7</span>
                    <div className="game-info">
                        <p className="game-genres">FPS, Shooting</p>
                        <p className="game-publisher">abc</p>
                    </div>
                    <div className="text-center">
                        <p className="game-price">$9.99</p>
                        <p className="game-platform "><i className="fab fa-playstation pr-1"></i></p>
                    </div>
                </div>
                </div>

                <div className="col-6 col-xs-6 col-sm-6 col-md-3 col-lg-3">
                    <div className="game-preview">
                        <div className="game-cover">
                            <img src="https://phonewallpaperhd.com/wp-content/uploads/2019/05/Video-Game-Phone-Wallpaper.jpg" alt=""/>
                        </div>
                        <h4 className="text-uppercase font-weight-bold game-name">Crysis: Remastered</h4>
                        <span className="game-rating">9.8</span>
                        <div className="game-info">
                            <p className="game-genres">FPS, Shooting</p>
                            <p className="game-publisher">abc</p>
                        </div>
                        <div className="text-center">
                            <p className="game-price">$9.99</p>
                            <p className="game-platform"><i className="fab fa-windows pr-1"></i><i className="fab fa-playstation pr-1"></i><i className="fab fa-xbox pr-1"></i></p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}
