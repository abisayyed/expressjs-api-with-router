const express = require("express");
const router = express.Router();

//get contacts from DB
router.get("/contacts", (req, res, next) => {
  res.send("Retrieving the contact list!!!!");
});

router.post("/contact", (req, res, next) => {
  //logic to add contact
});

router.delete("/contact/:id", (req, res, next) => {
  //logic to delete contact
});

module.exports = router;
