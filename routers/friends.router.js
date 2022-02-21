const express = require("express");
const router = express.Router();
const friendsController = require("./../controllers/friends.controller");

router.use((req, res, next) => {
  console.log(`IP address: ${req.ip} `);
  next();
});

router
  .route("/")
  .get(friendsController.getFriends)
  .post(friendsController.postFriend);

router.route("/:id").get(friendsController.getFriendById);

module.exports = router;
