import React from 'react';
import './style.css';

function MediaContent(props) {
    return (
        <div className="mediaContent">
            <div className="row">
                <div className="col s12">
                    <div className="card-panel">
                        <div className="row">
                            <div className="col s4 m2">
                            <img src={props.imgURL} alt="previewPic" className="previewPic" />
                            </div>
                            <div id="bodyText" className="col s8 m10">
                            <h5>{props.title}</h5>
                            <p>{props.info}</p>
                            <a href={props.link}>Download Pictures/Videos</a>
                            <br />
                            <br />
                            <button id="favButton">Save to Favorites</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default MediaContent;