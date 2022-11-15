const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    date: {
      type: Date,
      required: [true, "Date is required."],
    },
    budget: {
      type: Number,
      required: [true, "Budget is required."],
    },
    tasks: [
      {
        service: {
          type: String,
          required: true,
        },
        budget: {
          type: Number,
          required: true,
        },
      },
    ],
    vendors: [
      {
        location: {
          type: String,
          required: true,
        },
        service: {
          type: String,
          required: true,
        },
        vendor: {
          type: String,
          required: true,
        },
      },
    ],
    guests: [
      {
        name: {
          type: String,
          required: true,
        },
        mobileNo: {
          type: Number,
          required: true,
          min: 10,
        },
        status: {
          type: String,
          enum: ["Pending", "Confirm", "Not Confirm"],
          default: "Pending",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Events", eventSchema);
