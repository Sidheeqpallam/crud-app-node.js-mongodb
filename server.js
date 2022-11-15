const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

// common middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api", require("./routes/events"));

//bad requiest route
app.use("*", (req, res) => {
  res.status(404).send("Bad Requiest. ");
});

// data base setup
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("db connected"))
  .catch((err) => {
    console.log("Error from database: ", err.message);
  });


  // port setup
app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Server is running on port: ${PORT}`);
});
