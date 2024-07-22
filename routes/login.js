
const express = require('express');
const router  = express.Router();
const cookieSession = require('cookie-session');
const users = require('../CONSTANTS.js')

// GET /login
router.get('/', (req, res) => {
  
  res.render('login')
}); 


// POST /login
router.post('/', (req, res) => {
  
})


module.exports = router;
