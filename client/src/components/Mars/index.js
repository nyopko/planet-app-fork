import React from 'react';
import './style.css';

function Mars() {
  return (
    <div id="homeCard" className="row">
      <div className="col s12">
        <div className="card-panel">
          <div className="row">
            <div  className="col s4 m2">
              <img id="roverHome" src="https://media.npr.org/assets/img/2019/02/15/oppyconcept-7470fec47830d38c328ddf46b81eeeabc8e36c7c-s1100-c15.jpg" alt="rover" className="responsive-img" />
            </div>
            <div id="roverText" className="col s8 m10">
              <h4>Mars Rovers</h4>
              <p>Did you know that NASA has been exploring Mars since 1997? In the last two decades, four land rovers have been sent to search for evidence of ancient life on Mars.</p>
              <p> <a href="/rover"> Learn more about these rovers and see daily images from NASA. </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default Mars;