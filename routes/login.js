
const express = require('express');
const router  = express.Router();
const customerQueries = require('../db/queries/customersDB');


// GET /login
router.get('/', (req, res) => {
  const userEmailID = req.session.user_email_id;

  const templateVars = {
    user: userEmailID
  }

  if(userEmailID){
    res.redirect('/');
  } else {
    res.render("login", templateVars);
  }

}); 


// POST /login
router.post('/', (req, res) => {
  const userEmailID = req.body.email;

  customerQueries.getCustomersEmailandID()
    .then ((customers) => {
      for (let customer of customers){
        if (customer.email === userEmailID){
          req.session.user_email_id = userEmailID; //set cookie for user email
          req.session.user_id = customer.id; // set cookie of user id
          return res.redirect("/");
        } 
      }

      // For restaurant side (hard-coded)
      if ( userEmailID  === 'chef@burgerjoint.ca') {
        req.session.user_email_id = userEmailID;
        return res.redirect('/chefOrders');
      }

      // Unauthorized access
      return res.status(401).send("401 Unauthorized. Please Login with a valid email");
    })

})


module.exports = router;
