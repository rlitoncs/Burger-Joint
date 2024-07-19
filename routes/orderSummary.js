/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

const orderCart = []; //use as tempalte vars

router.get('/', (req, res) => {
  templateVars = {
    orderSummary: orderCart
  }
  res.render('orderSummary', templateVars);
});

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

module.exports = router;