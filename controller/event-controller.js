const asyncHandler = require("express-async-handler");
const Event = require("../models/event-model");

//@disc Create Event
//@api POST /api/post
//@access Privete
exports.createEvent = asyncHandler(async (req, res) => {
  const { name, date, budget, tasks, vendors, guests } = req.body;
  if (!name || !date || !budget) {
    return res.status(400).json({ message: "Details not completed." });
  }
  const event = await new Event({
    name,
    date,
    budget,
    tasks,
    vendors,
    guests,
  }).save();
  res.json(event);
});
