const express = require('express');
const router  = express.Router();
const orderQueries = require('../db/queries/orders');
const customerQueries = require('../db/queries/customers');
const sendSMS = require('../db/queries/sendSMS');

// GET orders
router.get('/', (req, res) => {
  const userEmailID = req.session.user_email_id;
  console.log('USER EMAIL ID:', userEmailID);

  orderQueries.getCustomerOrders()
   .then(orders => {
    // console.log(orders);
    const templateVars = {
      order: orders,
      user: userEmailID
    }

    res.render('orders', templateVars);
   })
}); 

// POST orders
router.post('/:id', (req, res) => {
  const pickUpTime = req.body.pick_up_time;

  const customerID = Number(req.body.customer_id);
  const customerName = req.body.customer_first_name + ' ' + req.body.customer_last_name;

  const orderID = Number(req.params.id); //used update orders table
  orderQueries.setPickUpTime(orderID, customerID, customerName, pickUpTime)

  //Formatting Time for SMS message (24 hr format -> 12 hr format)
  let formatPickUpTime = pickUpTime.slice(0,5); //e.g. 10:00:00
  let formatPickUpTimeHour = formatPickUpTime.slice(0,2);
  if(Number(formatPickUpTimeHour) >= 12) {
    let convertToTwelve = Number(formatPickUpTimeHour.slice(1,2)) - 2 ;
    formatPickUpTime = String(convertToTwelve) + formatPickUpTime.slice(2,5) + ' PM';

  } else {
    formatPickUpTime += ' AM';
  };

  sendSMS(`Hello ${customerName}. Your order(#${orderID}) will be ready for pick up at ${formatPickUpTime}! `)

  res.redirect('/orders'); //template vars

})
module.exports = router;
