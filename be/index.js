const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

// variables
const app = express();
const { PORT, DBUSER, DBPASS, DBNAME } = process.env;
const port = PORT || 8080;

// db connection
mongoose.connect(
  `mongodb+srv://${DBUSER}:${DBPASS}@umesh.hybg3.mongodb.net/${DBNAME}?retryWrites=true&w=majority`,
  (err) => {
    if (err) return console.log(err);
    console.log("connected with db");
  }
);

// middlewares
app.use(express.json());
app.use(cors());
app.use('/images', express.static('assets/images'))
app.use("/",express.static("public"))

// routes

app.use("/api/admin/v1/user", require("./routes/user.route"));
app.use("/api/admin/v1/category", require("./routes/category.route"));
app.use("/api/admin/v1/product", require("./routes/product.routes"));
app.use("/api/v1/front", require("./routes/front.route"));

// server
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
