DROP TABLE IF EXISTS order_items CASCADE;
CREATE TABLE order_items (
  id SERIAL PRIMARY KEY NOT NULL,
  item_quantity INTEGER NOT NULL,
<<<<<<< HEAD
  orders_id INTEGER REFERENCES orders(id),
  menu_item_id INTEGER REFERENCES menu_items(id)
=======
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  menu_item_id INTEGER REFERENCES menu_items(id) ON DELETE CASCADE
>>>>>>> master
);
