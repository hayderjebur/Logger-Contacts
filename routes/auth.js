const express = require("express");
const router = express.Router();

// @route    GET api/auth
//@desc      get logger in user
//@acesses   Private
router.get("/", (req, res) => {
  res.send("Auth  a user");
});

// @route    Post  api/auth
//@desc      Auth user & get token
//@acesses   Public
router.post("/", (req, res) => {
  res.send("login a user");
});

module.exports = router;
