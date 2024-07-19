const db = require('../connection');

const getOrders = () => {
  return db.query('SELECT * FROM orders;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getOrders };
