CREATE TABLE customers (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  phone_number INTEGER NOT NULL,
  email VARCHAR(255) NOT NULL,
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  created_at TIMESTAMP NOT NULL,
  total_price INTEGER NOT NULL,
  pick_up_time TIME NOT NULL,
  message VARCHAR(255) NOT NULL,
  order_status BOOLEAN NOT NULL,
  confirmation BOOLEAN NOT NULL,
  customer_id VARCHAR(80) NOT NULL,
);

CREATE TABLE order_items (
  id SERIAL PRIMARY KEY NOT NULL,
  item_quantity INTEGER NOT NULL,
  order_id VARCHAR(80) NOT NULL,
  menu_item_id VARCHAR(80) NOT NULL,
);

CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY NOT NULL,
  item_name VARCHAR(80) NOT NULL,
  description VARCHAR(255) NOT NULL,
  price INTEGER NOT NULL,
);


