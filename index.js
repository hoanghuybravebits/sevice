const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
//confict middleware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(morgan("dev"));
dotenv.config();
app.use(cors());

//connect mongoodb
console.log("process", process.env.URL);
const connect = async () => {
  await mongoose.connect(`${process.env.URL}`, (err) => {
    if (err) console.log("err", err);
    else console.log("connect my mongoodb ");
  });
};
connect();
require("./routers/author.router")(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
