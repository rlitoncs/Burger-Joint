DROP TABLE IF EXISTS menu_items CASCADE;
CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY NOT NULL,
  image_url VARCHAR(255),
  item_name VARCHAR(80) NOT NULL,
  description VARCHAR(255) NOT NULL,
  price INTEGER NOT NULL
);