const express = require("express");
const { isAdmin } = require("../middleware/auth")
const { addMenu, getMenu, updateMenu, deleteMenu} = require("../controllers/menu.controller");

const router = express.Router();

router.post("/menu", isAdmin, addMenu);
router.get("/menu", getMenu);
router.patch("/menu/:id", isAdmin, updateMenu);
router.delete("/menu/:id", isAdmin, deleteMenu);

module.exports = router;
