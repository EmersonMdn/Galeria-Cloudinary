const { Router } = require("express");
const router = Router();

router.get("/", function (req, res) {
  res.render("images");
});
router.get("/images/upload", function (req, res) {
  res.render("image_form");
});

module.exports = router;
