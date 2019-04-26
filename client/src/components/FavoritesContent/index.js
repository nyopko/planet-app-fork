import React from 'react';
import './style.css';

function FavoritesContent(props) {
    return (
        <div className="favoritesContent">
            <div className="row">
                <div className="col s12">
                    <div className="card-panel">
                        <div className="row">
                            <div className="col s4 m2">
                            <img src={props.imgURL} alt="previewPic" className="previewPic" />
                            </div>
                            <div id="bodyText" className="col s8 m10">
                            <h5>Props title will go here</h5>
                            <p>Props info will go here</p>
                            <a href="/home">Props download link will go here</a>
                            <br />
                            <br />
                            <button id="favButton">Remove from Favorites</button>                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default FavoritesContent;