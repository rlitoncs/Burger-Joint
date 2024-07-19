DROP TABLE IF EXISTS order_items CASCADE;
CREATE TABLE order_items (
  id SERIAL PRIMARY KEY NOT NULL,
  item_quantity INTEGER NOT NULL,
  orders_id INTEGER REFERENCES orders(id),
  menu_item_id VARCHAR(80) NOT NULL
);
