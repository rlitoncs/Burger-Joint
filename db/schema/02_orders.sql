DROP TABLE IF EXISTS orders CASCADE;
CREATE TABLE orders(
  id SERIAL PRIMARY KEY NOT NULL,
  created_at TIMESTAMP NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL,
  pick_up_time TIME NOT NULL,
  message VARCHAR(255) NOT NULL,
  order_status VARCHAR(255) NOT NULL,
  confirmation VARCHAR(255) NOT NULL,
  customer_id INTEGER REFERENCES customers(id) ON DELETE CASCADE
);
