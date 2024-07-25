/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/orders
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const orderQueries = require('../db/queries/orders');

router.get('/', (req, res) => {
  orderQueries.getOrders()
    .then(orders => {
      res.json({ orders });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.get('/:id/order_items',(req, res) => {
  const id = req.params.id
  orderQueries.getOrderItems(id)
    .then(orderItems => {
      let totalPrice = 0;
      for (let item of orderItems) {
        totalPrice += item.price;
      }
      console.log('orderItems:', orderItems)
      res.render('order_items',{orderItems,totalPrice})
     // res.json({ orderItems });
    })
    .catch(err => {
      console.log('error', err);
      res
        .status(500)
        .json({ error: err.message });
    });
  
})

module.exports = router;
