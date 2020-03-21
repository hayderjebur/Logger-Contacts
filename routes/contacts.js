const express = require("express");
const router = express.Router();

// @route    get api/contacts
//@desc      get all users contacts
//@acesses   Private
router.get("/", (req, res) => {
  res.send("get all contacts");
});

// @route    POST api/contacts
//@desc      Add a new contact
//@acesses   Private
router.post("/", (req, res) => {
  res.send("add contact");
});

// @route    Put api/contacts
//@desc      update a new contact
//@acesses   Private
router.put("/", (req, res) => {
  res.send("Update contact");
});

// @route    Delete api/users
//@desc       Delete contact
//@acesses   Private
router.delete("/", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
