/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const menuQueries = require('../db/queries/menu');

router.get('/', (req, res) => {
  menuQueries.getMenuItems()
    .then(burgerItems => {
      templateVars = {
        burgers: burgerItems
      }
      res.render('menu', templateVars); //array of objects
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// For searching menuItems
router.post('/', (req, res) => {
  const item = req.body.text;
  menuQueries.getSpecificItem(item)
    .then(burgerItems => {
      templateVars = {
        burgers: burgerItems
      }
      res.render('menu', templateVars); //array of objects
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;