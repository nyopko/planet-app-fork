import axios from "axios";
import moment from "moment";
require('dotenv').config();

/// APOD 
const APIKEY = process.env.REACT_APP_API_KEY;
const apodURL = "https://api.nasa.gov/planetary/apod?api_key=" + APIKEY;

/// Asteroids / NEO
let dateFormatted = moment();
dateFormatted = moment(dateFormatted).format("YYYY-MM-DD");

const neoURL = "https://api.nasa.gov/neo/rest/v1/feed?start_date=" + dateFormatted + "&end_date="+ dateFormatted + "&api_key=" + APIKEY;


/// Image search API 
const imgURL = "https://images-api.nasa.gov/search?q="

export default {
  grab: function() {
    console.log(APIKEY);
    console.log(apodURL);
   return axios.get(apodURL)
  },

  imgGet: function(query) {
    console.log(imgURL);
    return axios.get(imgURL + query);
  },


  grabAPOD: function() {
    console.log(process.env)
    console.log(neoURL);
    return axios.get(neoURL)
  },

  getUserInfo: function(login) {
    if (!login){
      console.log("no login credentials provided");
    }
    else {
      axios.get("/get_user", {email: login.email}).then(data => {
        var userLogIn = {};
        if(data.password === login.password) {
          userLogIn = {
            userName: data.name,
            userEmail: data.email,
            isLoggedIn: true
          };
  
          return userLogIn;
        }
  
        else {
          userLogIn ={
            userName: null,
            userEmail: null,
            isLoggedIn: false
          }
  
          return userLogIn;
        }
      })
    }
    
  },

  newUser: function(userInfo) {
    return axios.post("/new_user", userInfo);
  },

  addFavorite: function(urlInfo) {
    return axios.post("/add_url", urlInfo);
  },

  getUserFavorites: function(id) {
    return axios.get("/"+id+"/favorites");
  },

  deleteFavorite: function(id, url) {
    return axios.delete("/"+id+"/delete", {favUrl: url});
  }
};