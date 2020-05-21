const express = require("express");
const { auth, isAdmin } = require("../middleware/auth");
const order_controller = require("../controllers/order.controller");

const router = express.Router();

router.post("/order", auth, order_controller.placeOrder);
router.get("/order/me", auth, order_controller.getItemOrdered);
router.get("/order", isAdmin, order_controller.getOrder);

module.exports = router;
