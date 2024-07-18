DROP TABLE IF EXISTS orders CASCADE;
CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  created_at TIMESTAMP NOT NULL,
  total_price INTEGER NOT NULL,
  pick_up_time TIME NOT NULL,
  message VARCHAR(255) NOT NULL,
  order_status BOOLEAN NOT NULL,
  confirmation BOOLEAN NOT NULL,
  customer_id INTEGER REFERENCES customer(id),
);
