const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const getNotesRoute = require("./routes/get-notes");
const createPostRoute = require("./routes/create-post");
const editNoteRoute = require("./routes/update-note");
const getNoteRoute = require("./routes/get-note");
const deleteNoteRoute = require("./routes/delete-note");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.get("/", getNotesRoute);
app.get("/api/getNote/:key", getNoteRoute);
app.post("/api/create", createPostRoute);
app.post("/api/edit/:key", editNoteRoute);
app.delete("/api/delete/:key", deleteNoteRoute);

app.listen(8080);
