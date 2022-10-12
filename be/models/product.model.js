const mongoose = require("mongoose");

const ProSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
    price:{
        type:String
    },
    category:{
        type:String
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", ProSchema);
