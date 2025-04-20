const axios = require("axios");

exports.bypassConnectionAPI = (req, res) => {
  return async (API) => {
    try {
      const response = await axios.get(API, {
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
  };
};
