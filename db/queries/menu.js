const db = require('../connection');

const getMenuItems = () => {
  return db.query('SELECT * FROM menu_items;')
    .then(data => {
      return data.rows;
    });
};

const getSpecificItem = (item) => {
  return db.query(`SELECT * FROM menu_items WHERE UPPER(name) LIKE UPPER('%${item}%')`)
    .then(data => {
      console.log(data);
      return data.rows;
    })
}

module.exports = { getMenuItems, getSpecificItem };
