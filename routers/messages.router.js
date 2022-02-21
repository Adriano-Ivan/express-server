const express = require("express");
const router = express.Router();
const messagesController = require("./../controllers/messages.controller");

router
  .route("/")
  .get(messagesController.getMessages)
  .post(messagesController.postMessages);

module.exports = router;
