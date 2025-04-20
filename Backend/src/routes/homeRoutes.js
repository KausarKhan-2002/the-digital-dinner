const express = require("express");
const axios = require("axios");
const router = express.Router();

// Proxy Swiggy data
router.get("/restaurants", async (req, res) => {
  try {
    const swiggyURL =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    const response = await axios.get(swiggyURL, {
      headers: {
        // Optionally mimic a browser request
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0 Safari/537.36",
      },
    });

    res.status(200).json({
      success: true,
      message: "Retrieved all restaurants successfully",
      restaurants: response.data,
    });
  } catch (err) {
    console.error("Swiggy API fetch error:", err.message);
    res.status(500).json({ error: "Failed to fetch data from Swiggy" });
  }
});

module.exports = { restaurants: router };
