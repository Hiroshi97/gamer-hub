import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Category() {
    return (
        <div className="container game-category mt-5">
            <h3 className="d-inline-block title">Games by category: </h3>
            <div className="row my-5">
                <div className="col-12 col-md-6 col-lg-6">
                    <img src={require('../../../assets/action.jpg')}></img>
                    <NavLink to="/#" className="category-link">Action <span className="navigate px-1"><i className="fas fa-chevron-right"></i></span></NavLink>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                    <img src={require('../../../assets/shooter.jpg')}></img>
                    <NavLink to="/#" className="category-link">Shooter <span className="navigate px-1"><i className="fas fa-chevron-right"></i></span></NavLink>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                    <img src={require('../../../assets/rpg.jpg')}></img>
                    <NavLink to="/#" className="category-link">RPG <span className="navigate px-1"><i className="fas fa-chevron-right"></i></span></NavLink>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                    <img src={require('../../../assets/sport.jpg')}></img>
                    <NavLink to="/#" className="category-link">Sport <span className="navigate px-1"><i className="fas fa-chevron-right"></i></span></NavLink>
                </div>
            </div>
        </div>
    )
}
