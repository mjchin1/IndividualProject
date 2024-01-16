const express = require("express");
const router = express.Router();

router.use("/places", require("./places"));

router.use("/users", require("./users"));

router.use("/favorite-places", require("./userFavoritePlaces"));

module.exports = router;
