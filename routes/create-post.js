const db = require("../database");
const collection = db.collection("notes");

module.exports = async (req, res, next) => {
  let notes = [];
  await collection
    .all()
    .then((cursor) => cursor.map((doc) => notes.push(doc)))
    .then(() => res.status(200).json(notes))
    .catch((err) => console.error("Failed to fetch documents:", err));
};
