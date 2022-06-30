const db = require("../database");
const collection = db.collection("notes");

module.exports = (req, res, next) => {
  //console.log(req.body);

  collection
    .remove(req.params.key)
    .then(console.log("note deleted!!"))
    .catch((err) => console.log(err));
  res.end();
};
