const express = require("express");

const app = express();

const PORT = 3000;

const friends = [
  { id: 1, name: "Sir William Golding" },
  { id: 2, name: "Sir Roger Scruton" },
  { id: 3, name: "Fiódor Dostoiévski" },
];

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.post();
app.get("/friends", (req, res) => {
  res.json(friends);
});

app.get("/friends/:id", (req, res) => {
  const id = req.params.id;
  const friend = friends.find((f) => f.id === parseInt(id));
  if (friend) {
    res.status(200).json(friend);
  } else {
    req.status(404).json({
      error: "Friend does not exist",
    });
  }
});
app.get("/messages", (req, res) => {
  res.send("<ul><li>Hello Mozart !</li></ul>");
});

app.post("/messages", (req, res) => {
  console.log("Updating messages...");
});
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
