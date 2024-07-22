/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const orderQueries = require('../db/queries/orders');

const orderCart = []; //use as tempalte vars

// GET /orderSummary
router.get('/', (req, res) => {
  templateVars = {
    orderSummary: orderCart
  }
  res.render('orderSummary', templateVars);
});

// POST /orderSummary
router.post('/', (req, res) => {
  const menuItem = req.body;
  if(orderCart.length === 0){
    return orderCart.push(menuItem);
  }

  const existingItem = orderCart.find(item => item.id === menuItem.id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
      orderCart.push(menuItem);
  }
 
  res.redirect("/menu");
});


// POST /orderSummary/order-submitted
router.post('/order-submitted', (req, res) => {
  const customerID = 3; // we would get the id from the cookie session

  for (let item of orderCart) {
    orderQueries.addOrder('now()', Number(item.price) * Number(item.quantity), '12:30:00', 'Your order has been placed', 'Order Received', true, customerID);

    orderQueries.getSpecificOrder(customerID)
    .then(orderID => {
      console.log('order ID from getSpecificOrder()', orderID.reverse()[0], orderID.reverse()[0].id)
      orderQueries.addOrderItems(Number(item.quantity), orderID.reverse()[0].id, Number(item.id));
    });
  }

  res.render('orderComplete');
});


module.exports = router;