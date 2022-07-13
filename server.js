const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const apiRoute = require("./routes/api-route");
const userRoute = require("./routes/user-route");
const isAuth = require("./middleware/is-auth");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use("/api", isAuth, apiRoute);
app.use("/user", userRoute);

app.listen(8080);
