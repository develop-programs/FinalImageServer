const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    Image: String,
    URL: String,
    id: String,
  },
  { timestamps: true }
);
const DATA = mongoose.model("datas", UserSchema);

module.exports = DATA;
