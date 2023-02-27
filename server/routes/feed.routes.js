const express = require("express");
const router = express.Router();
const feedControllers = require('../controllers/feed.controllers')


router.get("/getAllFeeds", feedControllers.getAllFeeds);
router.post("/addOneFeed", feedControllers.addOneFeed);
router.delete("/deleteOneFeed/:id", feedControllers.deleteOneFeed);

module.exports = router