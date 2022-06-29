const express = require("express");
const app = express();

const getNotesRoute = require("./routes/get-notes");
const createPostRoute = require("./routes/create-post");
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.get("/", getNotesRoute);
//app.post("/create", createPostRoute);
// app.post('/edit', postNotesRoute);
// app.delete('/delete', deleteNotesRoute);

app.listen(8080);
