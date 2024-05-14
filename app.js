const express = require("express");

const app = express();
const morgan = require("morgan");

const tourRouter = require("./routes/tourRoutes");

const userRouter = require("./routes/userRoutes");

const URL_TOUR = "/api/v1/tours";
const URL_USER = "/api/v1/users";

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.static("./public"));

app.use(URL_TOUR, tourRouter);
app.use(URL_USER, userRouter);

module.exports = app;
