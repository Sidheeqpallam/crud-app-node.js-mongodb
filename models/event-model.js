const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
    demo: {
      type: String,
      required: [true, "this is demo"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Events", eventSchema);
