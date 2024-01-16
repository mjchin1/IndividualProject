const express = require("express");
const router = express.Router();

const {
  createUser,
  getAllUsers,
  getUserById,
  logUserIn,
  getFavoritePlacesByUserId,
  deleteUser,
} = require("../db/sqlHelperFunctions/usersFunctions");

router.get("/", async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.send(users);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const user = await getUserById(req.params.id);
    res.send(user);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const user = await createUser(req.body);
    res.send(user);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const user = await logUserIn(req.body);
    res.send(user);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const user = await deleteUser(req.params.id);
    res.send(user);
  } catch (error) {
    next(error);
  }
});

router.get("/:id/favorites", async (req, res, next) => {
  try {
    const places = await getFavoritePlacesByUserId(req.params.id);
    res.send(places);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
