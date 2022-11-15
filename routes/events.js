const router = require("express").Router();
const { createEvent } = require("../controller/event-controller");

router.post("/event", createEvent);

module.exports = router;
