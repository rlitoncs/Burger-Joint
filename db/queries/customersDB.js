const db = require('../connection');

//Retrieve all customer orders
const getCustomers = () => {
  return db.query(`SELECT * from customers;`)
    .then(data => {
      return data.rows;
  })
}

// Retrieve customer id and email
const getCustomersEmailandID = () => {
  return db.query(`SELECT id, email from customers;`)
    .then (data => {
      return data.rows;
    })
}

module.exports = { getCustomers, getCustomersEmailandID };