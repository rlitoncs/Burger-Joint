
const express = require('express');
const router  = express.Router();


// GET /login
router.get('/', (req, res) => {
  const userID = req.session.user_id;

  const templateVars = {
    user: userID  
  };
    res.render("login", templateVars);
}); 


// POST /login
router.post('/', (req, res) => {
  const userEmail = req.body.email;
  req.session.user_id = userEmail;

  if(userEmail !== 'owner@gmail.com'){
    res.redirect('/');
  } else {
    // redirects to owners page
  }
})


module.exports = router;
