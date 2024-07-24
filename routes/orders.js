// Orders
// ----------------------------------------
// Browse     GET     /orders
// Read       GET     /orders/:id
// Edit       POST    /orders/:id
// Add        POST    /orders
// Delete     POST    /orders/:id/delete

const express = require('express');
const router  = express.Router();
const ordersQueries = require('../db/queries/orders.js');


router.get('/', (req, res) => {
  res.render('orders');
});


module.exports = router;


