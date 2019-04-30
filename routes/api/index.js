const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./apiRoutes");

router.use("/users", apiRoutes);

router.use((req, res) => 
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
)

module.exports = router;
