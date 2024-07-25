/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const customerQueries = require('../db/queries/customersDB');

router.get('/', (req, res) => {
  const userEmailID = req.session.user_email_id;
  customerQueries.getCustomers()
    .then(customers => {
      // console.log(customers);
      const templateVars = {
        customers: customers,
        user: userEmailID
      }
      res.render('customersDB', templateVars);
    })

}); 

module.exports = router;
