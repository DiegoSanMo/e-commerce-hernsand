import React, { useState } from 'react';
import { Link } from 'react-router-dom'
const Hearder = () => {

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <nav className="navbar navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
              HERNSAN
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-item nav-link" to="/" id="home" >HOME</Link>
                <Link className="nav-item nav-link" to="/shop" id="shop" >SHOP</Link>
                <Link className="nav-item nav-link" to="/contact" id="contact" >CONTACT</Link>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-interval="3000">
                <img src="https://wallpaperaccess.com/full/388744.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item" data-interval="3000">
                <img src="http://www.hdnicewallpapers.com/Walls/Big/Hot%20Girls%20and%20Models/American_Model_Gigi_Hadid_Hot_Wallpaper.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item" data-interval="3000">
                <img src="https://wallpapercave.com/wp/wp1982404.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item" data-interval="3000">
                <img src="http://hdqwalls.com/wallpapers/guess-models-zu.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Hearder;