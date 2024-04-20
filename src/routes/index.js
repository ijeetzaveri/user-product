const express = require("express");
const router = express.Router();

// api health
router.get("/health", (req, res) => res.send("API is Working."));

router.use('/user', require('./user'));
router.use('/product', require('./product'));


module.exports = router;
