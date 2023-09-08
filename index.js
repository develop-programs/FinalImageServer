const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");

dotenv.config();

const app = express();

const GetData = require("./Routes/photos");

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(express.json());
app.use(cors());

app.use("/images", cors(corsOptions), GetData);

const uri = process.env.MONGO_URI || process.env.MONGO_URI_LOCAL;

const db = mongoose.connect(uri);
db.then(() => {
  console.log("Connected");
  app.listen(process.env.CONFIG_PORT, () => {
    console.log("Listning to port" + process.env.CONFIG_PORT);
  });
}).catch((err) => {
  console.log(err);
});
