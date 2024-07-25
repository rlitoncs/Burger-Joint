
const express = require('express');
const router  = express.Router();


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
  req.session.user_email_id = userEmailID;

  console.log(req.session.user_email_id);
  if ( userEmailID  === 'chef@burgerjoint.ca') {
    res.redirect('/chefOrders');
  } else {
    res.redirect("/");
  }

})


module.exports = router;
