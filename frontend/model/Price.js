const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const priceSchema = new Schema({
  oldPrice: {
    type: Number,
    required: true,
  },
  endPrice: {
    type: Number,
    required: true,
  },
  natija: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("foyda", priceSchema);
