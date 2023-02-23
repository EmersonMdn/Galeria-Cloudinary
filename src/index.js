if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const app = require("./utils/app.js");

app.listen(app.get("port"), () => {
  console.log("Puerto conectada: " + app.get("port"));
  console.log("Environment: " + process.env.NODE_ENV);
});
