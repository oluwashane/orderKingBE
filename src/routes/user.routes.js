const express = require("express");
const {auth, isAdmin } = require("../middleware/auth");
const { newUser, getUsers, updateProfile, loginUser, viewProfile, logoutUser, logoutAll, deleteUser} = require("../controllers/user.controller");
const router = express.Router();

router.post("/signup", newUser);
router.post("/login", loginUser)
router.post("/logout", auth, logoutUser)
router.post("/logoutAll", auth, logoutAll)
router.get("/users", auth, getUsers);
router.get("/user/me", auth, viewProfile)
router.patch("/users/me", auth,updateProfile);
router.delete("/users/me", auth, deleteUser);


module.exports = router;
