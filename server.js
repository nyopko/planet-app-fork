require("dotenv").config();
const express = require("express");
const db = require("./models");
const path = require("path");

const routes = require("./routes");

const PORT = process.env.PORT || 3000;

const app = express();
//random comment 

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname,'client/build')));


app.use(routes);

db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log("listening on port: " + PORT);
    })
})