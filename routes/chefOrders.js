const express = require('express');
const router  = express.Router();
const orderQueries = require('../db/queries/chefOrders');
const sendSMS = require('../db/queries/sendSMS');

// GET orders
router.get('/', (req, res) => {
  const userEmailID = req.session.user_email_id;
  console.log('USER EMAIL ID:', userEmailID);

  orderQueries.getCustomerOrders()
   .then(orders => {
    console.log(orders);
      const templateVars = {
        order: orders,
        user: userEmailID
      }

      res.render('chefOrders', templateVars);
   })
}); 

// POST orders
router.post('/:id', (req, res) => {
  const pickUpTimeMsg = req.body.pick_up_time;
  
  // Simulate Delay
  setTimeout(() => {
    sendSMS(`${pickUpTimeMsg}`);
  }, 3000)

  res.redirect('/chefOrders'); //template vars

})
module.exports = router;
