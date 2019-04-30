import API from "./API.js";

let spaceApp = {
    newUser: userInfo => {
        API.newUser(userInfo).then(res => {
            console.log(res);
            return res
        });
    },
    

    newUrl: urlInfo => {
        API.addFavorite(urlInfo).then(res => {
            console.log(res);
            return res
        });
    },
    
    
    getUserFavorites: user => {
        API.getUserFavorites(user).then(res => {
            console.log(res);
            return res
        });
    },
    

    getUser: login => {
        let loginInfo = API.getUserInfo(login)
        console.log("login info: " + loginInfo);
        return loginInfo;
        // .then(res => {
        //     console.log(res);
        //return res
        //})
    }

}
export default spaceApp;