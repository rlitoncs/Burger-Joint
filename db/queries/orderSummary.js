const db = require('../connection');

//Add the customer's order to orders table
const addOrder = (created_at, total_amount, pick_up_time, message, order_status, confirmation, customer_id) => {
  return db.query(`
   INSERT INTO orders (created_at, total_amount, pick_up_time, message,
    order_status, confirmation, customer_id) 
    VALUES('${created_at}', ${total_amount}, '${pick_up_time}', '${message}', '${order_status}', ${confirmation}, ${customer_id}) RETURNING *;
    `)
    .then(() => {
      console.log('Order has been successfully inserted');
    });
};

// Add the customer's order items
const addOrderItems = (item_quantity, order_id, menu_item_id) => {
  console.log('ORDER ID', order_id);
  return db.query(`
    INSERT INTO order_items (item_quantity, order_id, menu_item_id) 
      VALUES (${item_quantity}, ${order_id}, ${menu_item_id});
    `)
    .then(() => {
      console.log('Order Items has been successfully inserted');
    });

}

// Find specific order based on customer id
const getSpecificOrder = (customer_id) => { 
  return db.query(`SELECT id from orders WHERE customer_id = ${customer_id}`)
    .then(data => {
      console.log(data.rows);
      return data.rows;
    });
}

module.exports = { addOrder, getSpecificOrder, addOrderItems };