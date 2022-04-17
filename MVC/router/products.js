const express = require("express");
const router = express.Router();
const { getProduct, addToCart, buyProduct } = require("../controller/products");

// Registering the route to the router
// URLs
router.get("/", getProduct);

// Another way to set paths in fewer lines
router.route("/buy").get(addToCart).post(buyProduct);

module.exports = router;
