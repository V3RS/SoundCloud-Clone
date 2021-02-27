const router = require("express").Router();
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { Song } = require("../../db/models");
const asyncHandler = require("express-async-handler");

// retrieving all the songs
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const allSongs = await Song.findAll();
    return res.json({ allSongs });
  })
);

router.get(
  "/twelve",
  asyncHandler(async (req, res) => {
    const twelveSongs = await Song.findAll({ limit: 12 });
    return res.json({ twelveSongs });
  })
);

module.exports = router;
