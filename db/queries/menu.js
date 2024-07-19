const db = require('../connection');

const getMenuItems = () => {
  return db.query('SELECT * FROM menu_items;')
    .then(data => {
      return data.rows;
    });
};

const getSpecificItem = (item) => {
  return db.query(`SELECT * FROM menu_items WHERE name LIKE '%${item}%' `)
    .then(data => {
      console.log(data);
      return data.rows;
    })
}

module.exports = { getMenuItems, getSpecificItem };
