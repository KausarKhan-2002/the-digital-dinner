const express = require("express");
const { bypassConnectionAPI } = require("../helper/bypassAPI");
const router = express.Router();

const HOME_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
const MENU_URL =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=";

// Proxy Swiggy data
router.get("/restaurants", (req, res) => {
  const byPassAPI = bypassConnectionAPI(req, res);
  byPassAPI(HOME_URL);
});

router.get("/restaurant-menu/:id", (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      throw new Error("Id is required to get restaurant data");
    }

    const byPassAPI = bypassConnectionAPI(req, res);
    byPassAPI(MENU_URL + id);
  } catch (err) {
    console.log(err.message);
  }
});

router.get("/top-collections/:resId/:resTitle", (req, res) => {
  try {
    const { resId, resTitle } = req.params;

    if (!resId || !resTitle) {
      throw new Error("Id and Title are required to get restaurant data");
    }

    console.log(resId, resTitle);

    const COLLECTIONS = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=${resId}&tags=layout_BAU_Contextual%2C${resTitle}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`;

    const byPassAPI = bypassConnectionAPI(req, res);
    byPassAPI(COLLECTIONS);
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = { restaurants: router };
