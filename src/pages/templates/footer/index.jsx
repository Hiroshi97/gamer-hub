import React from 'react';
import './footer.scss';
import { NavLink } from 'react-router-dom';

export default function Footer() {
    const year = new Date().getFullYear();
    const copyright = '\u00A9';
    const games = ['Action', 'Adventure', 'Simulator', 'Sport', 'Strategy', 'Shooter', 'Online', 'RPG', 'Others'];
    const publishers = ['Comments', 'News', 'Articles', 'Information'];
    const about = ['Privacy', 'Terms', 'Cookies', 'Copyrights', 'Blogs'];
    const others = ['Users', 'References', 'Research'];
    const medias = [
        {
            icon: 'fab fa-facebook-square',
            url: 'https://www.facebook.com/hiroshinovember4'
        },
        {
            icon: 'fab fa-instagram',
            url: '/#'
        }, 
        {
            icon: 'fab fa-github',
            url: 'https://github.com/Hiroshi97'
        }, 
        {
            icon: 'fas fa-globe-asia',
            url: 'https://hiroshi97.github.io/'
        }]
    return (
        <footer className="footer container">
            <div className="row mt-5">
                <div className="col-4 mt-3 text-center">
                    <img className="logo-footer" src={require("../../../assets/logo2.png")} alt=""/>
                    <div className="mt-3">{medias.map((media,index) => <a key={index} className="mx-2 text-white" href={media.url}><i className={media.icon}></i></a>)}</div>
                    <p className="copyrights mt-3">Copyrights {copyright} {year} - Nguyen The Anh Dinh (Andy). All rights reserved.</p>
                </div>
                <div className="col-8">
                <div className="container-fluid">
                        <div className="row justify-content-between">
                            <div className="col-6 col-sm-2 col-lg-2 footer-category text-danger">
                                <h6 className="footer-category-publishers">Publishers</h6>
                                <ul>
                                    {publishers.map((item,index) => <li key={index}><NavLink className="inactive" to="/#">{item}</NavLink></li>)}
                                </ul>
                            </div>
                            
                            <div className="col-6 col-sm-2 col-lg-2 footer-category text-warning">
                                <h6 className="footer-category-categories">Categories</h6>
                                <ul>
                                    {games.map((game,index) => <li key={index}><NavLink className="inactive" to="/#">{game}</NavLink></li>)}
                                </ul>
                            </div>
                            <div className="col-6 col-sm-2 col-lg-2 footer-category text-info">
                                <h6 className="footer-category-about">About</h6>
                                <ul>
                                    {about.map((item,index) => <li key={index}><NavLink className="inactive" to="/#">{item}</NavLink></li>)}
                                </ul>
                            </div>
                            <div className="col-6 col-sm-2 col-lg-2 footer-category text-primary">
                                <h6 className="footer-category-others">Others</h6>
                                <ul>
                                    {others.map((item,index) => <li key={index}><NavLink className="inactive" to="/#">{item}</NavLink></li>)}
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
