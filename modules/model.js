const mongoose = require("mongoose");
const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});
const Author = mongoose.model("authors", authorSchema);
module.exports = { Author };
