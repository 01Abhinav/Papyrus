const db = require("../database");
const collection = db.collection("notes");

module.exports = (req, res, next) => {
  console.log(req.body);

  const data = {
    title: req.body.title,
    body: req.body.body,
    date: new Date(),
  };

  collection
    .save(data)
    .then(console.log("note saved!!"))
    .catch((err) => console.log(err));
  res.end();
};
