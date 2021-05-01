const router = require("express").Router();
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { Song } = require("../../db/models");
const asyncHandler = require("express-async-handler");
const { singleMulterUpload, singlePublicFileUpload } = require("../../awsS3");

// retrieving all the songs
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const allSongs = await Song.findAll();
    return res.json({ allSongs });
  })
);
//! order matters!
router.get(
  "/trend",
  asyncHandler(async (req, res) => {
    const trendSongs = await Song.findAll({ limit: 12 });
    return res.json({ trendSongs });
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const songId = req.params.id;
    const currentSong = await Song.findByPk(songId);
    return res.json({ currentSong });
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { title, genre, audioFile, album } = req.body;

    const audioFile = await singlePublicFileUpload(req.file);
    const imgUrl = await singlePublicFileUpload(req.file);

    const newSong = await Song.create({
      title,
      genre,
      audioFile,
      imgUrl,
      artist,
      album,
    });

    if (newSong) {
      return res.json({ newSong });
    } else return res.json({});
  })
);

module.exports = router;
