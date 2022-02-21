const path = require("path");

function getMessages(req, res) {
  res.render("messages", {
    title: "Messages to my Friends",
    friend: "Joseph Conrad",
  });
  // res.sendFile(
  //   path.join(__dirname, "..", "public", "images", "codigosANSI.JPG")
  // );
  //res.send("<ul><li>Hello Mozart !</li></ul>");
}

function postMessages(req, res) {
  console.log("Updating messages...");
}

module.exports = {
  getMessages,
  postMessages,
};
