DROP TABLE IF EXISTS customers CASCADE;
CREATE TABLE customers (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
<<<<<<< HEAD
  phone_number BIGINT NOT NULL,
=======
  phone_number VARCHAR(255) NOT NULL,
>>>>>>> master
  email VARCHAR(255) NOT NULL
);
