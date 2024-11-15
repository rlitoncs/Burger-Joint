// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const cookieSession = require('cookie-session');

const PORT = process.env.PORT || 8085;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));

app.use(cookieSession({
  name: 'burgerJointSession',
  keys:['key'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');

const ordersRoutes = require('./routes/orders-api')
//Routes
const menuItemsApiRoutes = require('./routes/menu-api');
const menuRoutes = require('./routes/menu');
const orderSummaryRoutes = require('./routes/orderSummary');
const loginRoutes = require('./routes/login');
const logoutRoutes = require('./routes/logout');
const chefOrderRoutes = require('./routes/chefOrders');
const customerRoutes = require('./routes/customersDB');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
//Example Routes
app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/users', usersRoutes);
app.use('/orders-api', ordersRoutes)

//Routes  
app.use('/api/menuItems', menuItemsApiRoutes); // this will show our menuItems in JSON
app.use('/menu', menuRoutes);
// Note: mount other resources here, using the same pattern above
app.use('/orderSummary', orderSummaryRoutes);
app.use('/login', loginRoutes);
app.use('/logout', logoutRoutes);
app.use('/chefOrders', chefOrderRoutes);
app.use('/customersDB', customerRoutes);


// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get('/', (req, res) => {
  const userEmailID = req.session.user_email_id;
  console.log(userEmailID);

  const templateVars = {
    user: userEmailID
  }
  res.render('index', templateVars);
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
