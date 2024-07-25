/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const orderQueries = require('../db/queries/orderSummary');
const sendSMS = require('../db/queries/sendSMS');

let orderCart = []; //use as tempalte vars

// GET /orderSummary
router.get('/', (req, res) => {
  const userEmailID = req.session.user_email_id;
  templateVars = {
    orderSummary: orderCart,
    user: userEmailID
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
  const userEmailID = req.session.user_email_id;
  const customerID = 3; // hard-coded customer id

  const templateVars = {
    user: userEmailID
  }

  //Add new order to orders table
  for (let item of orderCart) {
    orderQueries.addOrder('NOW()', Number(item.price) * Number(item.quantity), '12:30:00', 'Your order has been placed', 'Order Received', true, customerID);

    //Add new order to order_items table
    orderQueries.getSpecificOrder(customerID)
    .then(orderID => {
      console.log('order ID from getSpecificOrder()', orderID.reverse()[0], orderID.reverse()[0].id)
      orderQueries.addOrderItems(Number(item.quantity), orderID.reverse()[0].id, Number(item.id));
    });
  }

  orderCart = [] ;

   //Customer receives message from Restaurant
  const customerMsg = 'Thanks for ordering at Burger Joint! Your order has been successfully submitted and received. We\'ll notify you when your order is ready! ';

  //Restaurant receives message from Customer
  const restaurantMsg = 'Burger Joint: Chef you have received a new order!'

  sendSMS(customerMsg)
    .then(() => {
      console.log('Message delivered to Customer');
      sendSMS(restaurantMsg)
      .then(() => {
       console.log('Message delivered to Chef')
      })
    })


  res.render('orderComplete', templateVars);
});


module.exports = router;