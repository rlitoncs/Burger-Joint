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
  return db.query(`
    SELECT orders.id, customers.id AS customer_id, menu_items.name AS menu_name, item_quantity, first_name, last_name, total_amount, created_at FROM orders 
      INNER JOIN customers ON customer_id = customers.id 
      INNER JOIN order_items ON order_id = orders.id 
      INNER JOIN menu_items ON menu_item_id = menu_items.id
    ORDER by created_at DESC;
    `)
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