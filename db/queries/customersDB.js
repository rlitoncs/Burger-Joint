const db = require('../connection');

//Retrieve all customer orders
const getCustomers = () => {
  return db.query(`SELECT * from customers;`)
    .then(data => {
      return data.rows;
  })
}

module.exports = { getCustomers };