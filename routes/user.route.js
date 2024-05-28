const user = require("../controllers/user.controller")
const router = require("express").Router()
router
.post("/update", user.updateProfile)
.get("/search/:term", user.searchProfile)
// .get("/search/:term","/update", user.updateProfile")

module.exports = router