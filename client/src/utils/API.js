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
   return axios.get(apodURL)
  },

  imgGet: function(query) {
    return axios.get(imgURL + query);
  },


  grabAPOD: function() {
    return axios.get(neoURL)
  },

  getUserInfo: function(login) {
    console.log(login);
    if (!login){
      console.log("no login credentials provided");
    }
    else {
      axios.get("https://localhost:3000/api/users/get_user", {email: login.email}).then(data => {
        console.log(data);
        if(data[0].password === login.password) {
          let userLogIn = {
            userName: data[0].name,
            userEmail: data[0].email,
            isLoggedIn: true
          };
          return userLogIn;
        }
  
        else {
          let userLogIn ={
            userName: null,
            userEmail: null,
            isLoggedIn: false
          };
          return userLogIn;
        }

      })
    }
    
  },

  newUser: function(userInfo) {
    return axios.post("/api/users/new_user", userInfo);
  },

  addFavorite: function(urlInfo) {
    return axios.post("/api/users/add_url", urlInfo);
  },

  getUserFavorites: function(id) {
    return axios.get("/api/users/"+id+"/favorites");
  },

  deleteFavorite: function(id, url) {
    return axios.delete("/api/users/"+id+"/delete", {favUrl: url});
  }
};