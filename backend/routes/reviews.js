const express = require("express");
const axios = require("axios");
const router = express.Router();
const Review = require("../models/Review");

// Get all reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: "Error fetching reviews" });
  }
});

// Add a review (Auto-Detect Country)
router.post("/", async (req, res) => {
  let { name, country, message } = req.body;

  // Detect country if not provided
  if (!country) {
    try {
      const ipInfo = await axios.get("http://ip-api.com/json");
      country = ipInfo.data.countryCode;
    } catch (error) {
      console.error("Failed to fetch country from IP", error);
      return res.status(500).json({ error: "Country detection failed" });
    }
  }

  try {
    const newReview = new Review({ name, country, message });
    await newReview.save();
    res.json(newReview);
  } catch (error) {
    res.status(500).json({ error: "Error saving review" });
  }
});

// Delete a review
router.delete("/:id", async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.json({ message: "Review deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting review" });
  }
});

module.exports = router;
