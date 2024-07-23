// Orders
// ----------------------------------------
// Browse     GET     /orders
// Read       GET     /orders/:id
// Edit       POST    /orders/:id
// Add        POST    /orders
// Delete     POST    /orders/:id/delete

const express = require('express');
const router  = express.Router();
// const urlDatabase = require('..insert db')


router.get('/orders', (req, res) => {
  res.json(urlDatabase);
});


module.exports = router;


