const express = require("express");
const {
    getHomePage,
    getABC,
    postCreateUser,
    getCreatePage,
    getupdatePage,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);
router.get("/abc", getABC);
router.get("/create", getCreatePage);
router.get("/update/:id", getupdatePage);
router.post("/create-user", postCreateUser);

module.exports = router;
