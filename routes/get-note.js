const db = require("../database");
const collection = db.collection("notes");

module.exports = (req, res, next) => {
  //console.log(req.params);
  const key = req.params.key;
  let notes = [];
  collection
    .all()
    .then((cursor) =>
      cursor.map((doc) => {
        if (key === doc._key) {
          notes.push(doc);
        }
        // console.log(key, doc._key);
      })
    )
    .then(() => res.status(200).json(notes))
    .catch((err) => console.error("Failed to fetch documents:", err));
};
