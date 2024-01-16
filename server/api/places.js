const express = require("express");
const router = express.Router();

const {
  getAllPlaces,
  getPlaceById,
  createPlace,
  deletePlace,
} = require("../db/sqlHelperFunctions/placesFunctions");

router.get("/", async (req, res, next) => {
  try {
    const places = await getAllPlaces();
    res.send(places);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const place = await getPlaceById(req.params.id);
    res.send(place);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const place = await createPlace(req.body);
    res.send(place);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const place = await deletePlace(req.params.id);
    res.send(place);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
