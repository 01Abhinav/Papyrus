const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const apiRoute = require("./routes/api-route");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use("/api", apiRoute);

app.listen(8080);
