const express = require("express");
const {
    getHomePage,
    getABC,
    postCreateUser,
    getCreatePage,
    getupdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);
router.get("/abc", getABC);
router.get("/create", getCreatePage);
router.get("/update/:id", getupdatePage);
router.post("/create-user", postCreateUser);
router.post("/update-user", postUpdateUser);
router.post("/delete-user/:id", postDeleteUser);
router.post("/delete-user", postHandleRemoveUser);

module.exports = router;
