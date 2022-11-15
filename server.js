const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/", require("./routes/events"));

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("db connected"))
  .catch((err) => {
    console.log("Error from database: ", err.message);
  });

app.listen(PORT, (err) => {
  if (err) console.log(err);
});
