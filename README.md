# Burger Joint
Burger Joint is a multi-page web application developed with Node.js, Express, PostgreSQL, EJS, jQuery, AJAX, and Twilio. It allows customers to order their favorite burgers and receive SMS notifications when their order is ready. The app also provides a dashboard for the restaurant to view all incoming orders and communicate with customers when their orders are ready for pickup.

### Getting Started
1. Clone your copy of the repo to your dev machine
2. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
3. Update the .env file with your correct local information 
  - username: `labber` 
  - password: `labber` 
  - database: `midterm`
4. Install dependencies: `npm i`
5. Fix to binaries for sass: `npm rebuild node-sass`
6. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
8. Visit `http://localhost:8080/`

### Home Page
!["View of Home Page"](https://github.com/rlitoncs/Burger-Joint/blob/master/docs/Home-Page.JPG?raw=true)

### Menu Page
!["View of Menu Page"](https://github.com/rlitoncs/Burger-Joint/blob/master/docs/Menu-Page.JPG?raw=true)

### Order Summary Page
!["View of Order Summary Page"](https://github.com/rlitoncs/Burger-Joint/blob/master/docs/Order-Page.JPG?raw=true)

### Restaurant Incoming Orders Page
!["View of Restaurant Side Page"](https://github.com/rlitoncs/Burger-Joint/blob/master/docs/Restaurant-Side-Orders-Page.JPG?raw=true)
!["View of Message Sent"](https://github.com/rlitoncs/Burger-Joint/blob/master/docs/Message-Sent.JPG?raw=true)

### Message Received
!["View of Customer and Restaurant Messages"](https://github.com/rlitoncs/Burger-Joint/blob/master/docs/Message-Received.jpg?raw=true)