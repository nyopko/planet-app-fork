import React, { Component } from 'react';
import Footer from '../components/Footer';
import FavoritesContent from '../components/FavoritesContent';

class App extends Component {
  render() {
    return (
      <div className="favoritesPage">
      <div className="main">
          <div className="row">
            <div className="col s12 m9">
              <div className="row">
                <div className="col s12">
                  <div className="card-panel">
                    <h2 className="center-align">My Favorites</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
      <FavoritesContent />
        </div>
      <Footer />
      </div>
    );
  }
}

export default App;