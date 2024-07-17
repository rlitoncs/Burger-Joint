## Routes
*Once you know the resources that you'll have, write out the routes that you'll need to perform BREAD operations on those resources
Remember RESTful conventions (they make it much easier)*

[MVP/MVD](https://github.com/rlitoncs/food-pick-up-ordering/blob/master/planning/mvp-mvd/mvp-mvd.md)

```
CUSTOMERS
----------------------------------------
Browse  |   GET   |  /customers           
Read    |   GET   |  /customers/:id
Edit    |   POST  |  /customers/:id
Add     |   POST  |  /customers
Delete  |   POST  |  /customers/:id/delete


Orders
----------------------------------------
Browse  |   GET   |  /orders           
Read    |   GET   |  /orders/:id
Edit    |   POST  |  /orders/:id
Add     |   POST  |  /orders
Delete  |   POST  |  /orders/:id/delete


Order_Items
----------------------------------------
Browse  |   GET   |  /orderItems           
Read    |   GET   |  /orderItems/:id
Edit    |   POST  |  /orderItems/:id
Add     |   POST  |  /orderItems
Delete  |   POST  |  /orderItems/:id/delete


Menu_Items
----------------------------------------
Browse  |   GET   |  /menuItems           
Read    |   GET   |  /menuItems/:id
Edit    |   POST  |  /menuItems/:id
Add     |   POST  |  /menuItems
Delete  |   POST  |  /menuItems/:id/delete

```