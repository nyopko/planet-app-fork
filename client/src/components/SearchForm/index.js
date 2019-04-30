import React from 'react';
import './style.css';

function SearchForm(props) {
    return (
        <div className="searchForm">
            <div className="col s4 m2">
            </div>
            <div className="row">
                <div className="col s12 m9">
                    <div className="row">
                        <div className="col s12">
                        <div className="card-panel">
                            <div className="container">
            <h5 id="introText">This search box will search NASA's image and video database and provide safe download links for content on your favorite planets and other space related fun! </h5>
                                <form>
                                    <div className="input-group">
                                        <div className="input-field">
                                            <input
                                            onChange={props.handleInputChange}
                                            value={props.value}
                                            search="search"
                                            name="search"
                                            />
                                            <label className="label-icon" forHTML="search">
                                                {/* <i className="material-icons">search</i> */}
                                            </label>
                                        </div>
                                        <button onClick={props.handleFormSubmit} id="searchButton" class="input-group-addon btn">search</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default SearchForm;