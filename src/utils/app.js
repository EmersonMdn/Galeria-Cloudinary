const express = require("express");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");
const handlebars = require("express-handlebars");
const { v4: uuid } = require("uuid");
const port = process.env.PORT || 3000;

// Initialize
const app = express();
require("./database.js");

//Settings
app.set("port", process.env.PORT || 8080);

app.set("views", path.join(__dirname, "../views"));
//Handlebars config
const hbs = handlebars.engine({
  defaultLayout: "main",
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"),
  extname: ".hbs",
});
app.engine("hbs", hbs);
app.set("view engine", "hbs");

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const storage = multer.diskStorage({
  destination: path.join(__dirname, "public/uploads"),
  filename: (req, file, cb) => {
    cb(null, uuid() + path.extname(file.originalname));
  },
});
app.use(multer({ storage }).single("image"));

//Routes
app.use(require("../routes/index.routes.js"));

module.exports = app;
