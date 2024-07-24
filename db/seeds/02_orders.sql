<<<<<<< HEAD
INSERT INTO orders (id, created_at, total_price, pick_up_time, message,
 order_status, confirmation, customers_id) VALUES(
  1, '2024-07-15 14:30:00', 17.00, '2024-07-15 15:00:00', 'Your order has been placed',
   true, true, 1);


INSERT INTO orders (id, created_at, total_price, pick_up_time, message,
 order_status, confirmation, customers_id) VALUES(
  2, '2024-07-15 14:00:00', 17.00, '2024-07-15 14:30:00', 'Your order has been placed',
   true, true, 2);


INSERT INTO orders (id, created_at, total_price, pick_up_time, message,
 order_status, confirmation, customers_id) VALUES(
  3, '2024-06-16 12:00:00', 12.00, '2024-06-16 12:30:00', 'Your order has been placed',
   true, true, 3
);

INSERT INTO orders (id, created_at, total_price, pick_up_time, message,
 order_status, confirmation, customers_id) VALUES(
  4, '2024-06-10 13:00:00', 12.00, '2024-06-10 13:30:00', 'Your order has been placed',
   true, true, 3
);
=======
INSERT INTO orders (created_at, total_amount, pick_up_time, message,
 order_status, confirmation, customer_id) VALUES(
  '2024-07-13 14:30:00', 17.00, '15:00:00', 'Your order has been placed',
  'Order Received', true, 1
);

INSERT INTO orders (created_at, total_amount, pick_up_time, message,
 order_status, confirmation, customer_id) VALUES(
  '2024-07-15 14:00:00', 17.00, '14:30:00', 'Your order has been placed',
  'Order Received', true, 2
);

INSERT INTO orders (created_at, total_amount, pick_up_time, message,
 order_status, confirmation, customer_id) VALUES(
  '2024-06-16 12:00:00', 12.00, '12:30:00', 'Your order has been placed',
  'Order Received', true, 3
);
>>>>>>> master
