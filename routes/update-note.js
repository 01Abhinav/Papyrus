const db = require("../database");
const collection = db.collection("notes");

module.exports = (req, res, next) => {
  console.log(req.body);
  const data = {
    title: req.body.title,
    body: req.body.body,
    date: req.body.date,
  };

  collection
    .update(req.params.key, data)
    .then(console.log("note updated!!"))
    .catch((err) => console.log(err));
  res.end();
};
