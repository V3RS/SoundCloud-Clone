const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const songsRouter = require("./songs.js");
const commentsRouter = require("./comments.js");
const asyncHandler = require("express-async-handler");
const {
  setTokenCookie,
  restoreUser,
  requireAuth,
} = require("../../utils/auth.js");
const { User } = require("../../db/models");

router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/songs", songsRouter);
router.use("/comments", commentsRouter);

router.post("/test", (req, res) => {
  res.json({ requestBody: req.body });
});

// // setting the user token test
// router.get(
//   "/set-token-cookie",
//   asyncHandler(async (req, res) => {
//     const user = await User.findOne({
//       where: {
//         username: "Demo",
//       },
//     });
//     setTokenCookie(res, user);
//     return res.json({ user });
//   })
// );

// // restoring the user test
// router.get("/restore-user", restoreUser, (req, res) => {
//   return res.json(req.user);
// });

// // require auth test route
// router.get("/require-auth", requireAuth, (req, res) => res.json(req.user));

module.exports = router;
