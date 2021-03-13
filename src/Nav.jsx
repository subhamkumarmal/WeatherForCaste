import React from 'react';
import './css/nav.css';
const Nav = () =>{
  return(
            <>
            <nav className="navbar navbar-expand-lg backcolor">
  <div className="container-fluid">
    <h3>SkmComTech</h3>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fa fa-sliders-h"></i>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav ">
        <a className="nav-link active"  href="/">Home</a>
        <a className="nav-link" href="/weather">WeatherForcaste</a>
        <a className="nav-link" href="#">Pricing</a>
    
      </div>
    </div>
  </div>
</nav>
            </>
       )
}

export default Nav;