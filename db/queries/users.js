const db = require('../connection');

const getUsers = () => {
  return db.query('SELECT * FROM menu_items;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getUsers };
