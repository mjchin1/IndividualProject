const express = require("express");
const router = express.Router();

const {
  getAllFavoritePlaces,
  getFavoritePlaceById,
  addFavoritePlace,
  deleteFavoritePlace,
} = require("../db/sqlHelperFunctions/userFavoritePlacesFunctions");

router.get("/", async (req, res, next) => {
  try {
    const places = await getAllFavoritePlaces();
    res.send(places);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const place = await getFavoritePlaceById(req.params.id);
    res.send(place);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const place = await addFavoritePlace(req.body);
    res.send(place);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const place = await deleteFavoritePlace(req.params.id);
    res.send(place);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
