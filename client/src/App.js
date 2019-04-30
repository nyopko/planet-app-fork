/// Components import
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PageBackground from "./components/PageBackground";



/// Stylesheet import 

import './App.css';

/// Pages imports 
import Home from "./pages/Home.js";
import Planets from "./pages/Planets.js";
import Rover from "./pages/Rover.js";
import Hubble from "./pages/Hubble.js";
import Media from "./pages/Media";
import Resources from "./pages/Resources";
import Favorites from "./pages/Favorites.js"


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <PageBackground>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/planets" component={Planets} />
            <Route exact path="/hubble" component={Hubble} />
            <Route exact path="/rover" component={Rover} />
            <Route exact path="/media" component={Media} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/favorites" component={Favorites} />
          </Switch>
          {/* <Footer /> */}
          </PageBackground>
        </div>
      </Router>
    );
  }
}

export default App;
