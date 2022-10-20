const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    pid: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    uid:{
        type:String
    },
    status:{
        type:String,
        default:"placed"
    },
    paymentId:{
      type:String,
      required:true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", OrderSchema);
