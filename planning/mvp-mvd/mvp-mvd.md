# MVP / MVD 
*MVP vs MVD*

*There is a concept in development of an MVP, the Minimum Viable Product
An MVP has just enough features to be useful to a user
This concept helps streamline the development process and help keep the team on target
For mid-terms, we want to focus on the MVD, the Minimum Viable Demo
If you aren't going to demo it, don't build it*

[Routes](https://github.com/rlitoncs/food-pick-up-ordering/blob/master/planning/routes/routes.md)

```
CUSTOMERS
----------------------------------------
Browse  |   GET   |  /customers           
Read    |   GET   |  /customers/:id
Add     |   POST  |  /customers (S)

ORDERS
----------------------------------------
Browse  |   GET   |  /orders           
Read    |   GET   |  /orders/:id
Edit    |   POST  |  /orders/:id
Add     |   POST  |  /orders

ORDER_ITEMS
----------------------------------------
Browse  |   GET   |  /order/:id/order_items           
Add     |   POST  |  /order/:id/order_items 
Delete  |   POST  |  /order/:id/order_items/delete 

MENU_ITEMS
----------------------------------------
Browse  |   GET   |  /menu_items          
Read    |   GET   |  /menu_items/:id

```