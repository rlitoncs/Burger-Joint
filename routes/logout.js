
const express = require('express');
const router  = express.Router();


// POST /login
router.post('/', (req, res) => {
  req.session = null;
  res.redirect("/login");
})


module.exports = router;
