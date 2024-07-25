const db = require('../connection');

const getOrders = () => {
  return db.query('SELECT * FROM orders;')
    .then(data => {
      return data.rows;
    });
};

const getOrderItems = (id) => {
  return db.query('SELECT * FROM order_items JOIN menu_items ON menu_items.id = order_items.menu_item_id where orders_id = $1;',[id])
    .then(data => {
      return data.rows;
    });
};
module.exports = { getOrders, getOrderItems};
