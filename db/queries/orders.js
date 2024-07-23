const db = require('../connection');

//Retrieve all customer orders
const getOrders = () => {
  return db.query(`SELECT * from orders;`)
    .then(data => {
      return data.rows;
  })
}

//Retrieve customer details and order details
const getCustomerOrders = () => {
  return db.query(`SELECT * from orders INNER JOIN customers ON customer_id = customers.id ORDER BY orders.id ASC;`)
  .then(data => {
    return data.rows;
  })
}

//Update customer order pick up time
const setPickUpTime = (orderID, customerID, customerName, pickUpTime) => {
  return db.query(`UPDATE orders SET pick_up_time = '${pickUpTime}' WHERE customer_id = ${orderID};`)
  .then(() => {
    console.log(`Pick Up time for \nCustomer ID: ${customerID} \nCustomer Name: ${customerName}\nORDER ID: ${orderID} \nhas been successfully UPDATED to ${pickUpTime}`);
  })
}

module.exports = { getOrders, getCustomerOrders, setPickUpTime};