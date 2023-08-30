# fs26-Foo-D-ies-group

## Setup

### Dependencies

Run `npm install` in the project folder to install dependencies related to Express (the server).

`cd client` and run `npm install` install dependencies related to React (the client).

### Database Prep

Create `.env` file in project directory and add

```
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=mealprepapp
  DB_PASS=YOUR PASSWORD
  SUPER_SECRET=WHATEVER YOU WANT
```

(replace `YOUR_PASSWORD` with your actual password)

Type `mysql -u root -p` to access the MySQL CLI using your password.

In the MySQL CLI, type `create database mealprepapp;` to create a database in MySQL.

Run the following in the MySQL CLI: `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YOUR_PASSWORD';` (replace `YOUR_PASSWORD` with your actual password)

Run `npm run migrate` in your **TERMINAL**, in the **project** folder (not your MySQL CLI! Open a new terminal window for this). This will create a table called 'items' in your database.

### Run Your Development Servers

- Run `npm start` in project directory to start the Express server on port 4000
- `cd client` and run `npm run dev` to start client server in development mode with hot reloading in port 5173.
- Client is configured so all API calls will be proxied to port 4000 for a smoother development experience. Yay!
- You can test your client app in `http://localhost:5173`
- You can test your API in `http://localhost:4000/api`

## App Info

### Database Structure

#### API

All the food informatiion is provided via the Spoonacular API. See the spoonacular [file] (/services/spoonacular.js).

Two get methods were enough for us to create all the functionalities we were looking for as they provide ample details (food macros, calories, recipes etc).

All documentation provided on the Spoonacular website `https://spoonacular.com/food-api/docs`.

#### Tables

To store the data, 3 tables were created: users, settings and calendar. See [schema] (/Database Schema.PNG) for more info.