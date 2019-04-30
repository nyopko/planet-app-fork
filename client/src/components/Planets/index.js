import React from 'react';
import './style.css';

function Planets() {
  return (
    <div id="homeCard" className="row">
      <div className="col s12">
        <div className="card-panel">
          <div className="row">
            <div className="col s4 m2">
              <img id="homePlanet" src="https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/12/27/Photos/Processed/solarsystem-kQ6--621x414@LiveMint.jpg" alt="rover" className="responsive-img" />
            </div>
            <div id="planetText" className="col s8 m10">
              <h4>Our Solar System's Planets</h4>
              <p>Our solar system's planets come in two flavors; rocky planets that have solid ground (Mercury, Venus, Earth and Mars) and larger planets that are made up of gases (Jupiter, Saturn, Uranus, and Neptune).</p>
              <p> <a href="/planets"> Learn more about our solar system's planets. </a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Planets;