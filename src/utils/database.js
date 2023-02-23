
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URL, {
    serverSelectionTimeoutMS: 3000,
    useNewUrlParser: true,
  })
  .then(() => console.log("DB conectada"))
  .catch((err) => console.log(err.message));
