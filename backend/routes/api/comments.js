const router = require("express").Router();
const { check } = require("express-validator");
const { Comment } = require("../../db/models");
const asyncHandler = require("express-async-handler");

// to get all comments for a certain song
router.get(
  "/:songId",
  asyncHandler(async (req, res) => {
    const comments = await Comments.findAll({
      where: { songId: parseInt(req.params.songId) },
      include: [
        {
          model: User,
          order: [["createdAt", "DESC"]],
        },
      ],
    });
    return res.json({
      comments,
    });
  })
);

module.exports = router;
