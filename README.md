# BusyBytes

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

### Back End

#### | API

All the food informatiion is provided via the Spoonacular API. 

Two get methods were enough for us to create all the functionalities we were looking for as they provide ample details (food macros, calories, recipes etc). See the spoonacular [file](/services/spoonacular.js).

Documentation provided on the [Spoonacular](https://spoonacular.com/food-api/docs) website.

#### | Database Tables

To store the data, 3 tables were created: user, settings and calendar. See [schema](/DatabaseSchema.PNG) for details.

The initial creation was done using SQL however all tables and routes were then modified when migrated to Sequelize. See migration [files](/migrations) for details.

#### | Routes

As the website requires users to register and then log in to access functionalities, a "UserShouldBeLoggedIn" guard was created and reused for all the relevant routes.
Then the routes were created separately depending on their use: API routes, settings routes, authorisation routes and recipes routes.

### Front End

#### | Landing page

The first page users can access is the landing page. It provides an overview of the application and allows the user to register or log in to access their information.

Note: this page welcomes users with a cute robot cook custom designed by one of the project's original team member.

#### | User Flow

Once registered and logged in, the user has access to a wide variety of pages and actions.
The top bar displays the BusyBytes name, that is also a link to the profile page, and the log out button.

##### > Profile page

Upon log in, this is where users first land.
This page displays the user information: profile picture, user name, email, user favourites and preferences.
 
On that same page the user can modify every piece of information displayed, including the ones provided during registration (name and email). 

##### > Calendar page

Custom made, this calendar allows the user to naviguate through different weeks (past and future) to see any meal plan already made.

It displays the date and day as well as the different meal types proposed: breakfast, elevensies, lunch, afternoon tea and dinner.

From this page, user can access added meals' recipes, add tried meals to the favourites and remove meals from calendar.

##### > New Meal Plan

This page is the heart of the app, where users can look for recipes to create their meal plans. The search option has an extensive list options the user can populate to narrow down their search.
The filters are organised in categories:

* Food Search: query, meal type, cuisine,
* Include/Exclude: ingredients to include, ingredients to exclude,
* Diet Specifications: diet, intolerances,
* Preparation: maximum ready time (in minutes), equipment,
* Nutrition (min/max): calories, carbs, protein, fat, cholesterol, saturated fat, fiber, sugar.

Some of these filter can have pre-set details: ingredients to exclude, diet and intolerances.

Then the "Get Recipes" button fetched the recipes matching the search parameters. The recipes are displayed in tiles including the recipe name, picture, and the option to add it to user calendar speciying the date and meal type then clicking on "Add To Calendar".

Clicking on the meal picture will send the user to the recipe page for that meal.

##### > Recipe Repo

This is the favourites page, any meal added as a favourite will appear on that page.

This page will appear empty by default. If it is the case the user will be given the option to search for meals clicking on the "Search Recipes" button that will redirect them to the "New Meal Plan" page.

The user can remove a meal from the favourites using the cross button. They can also access the recipe page by clicking on the pictures.

##### > Recipe page

The recipes cannot be accessed from the menu tabs of the website, as they are different for each meal, they can be accessed through the meal's picture from other pages (calendar, new meal plan, recipe repo).

The recipe page will show the meal name and type, the ingredients list, cooking instructions and nutritional information.

From this page, the user can populate their shopping list should they need to purchase any of the ingredients needed simply by ticking the box for the missing ingredient. 

##### > Shopping List

The shopping list page will appear empty by default. If it is the case the user will be given the option to search for meals clicking on the "Search for Recipes" button that will redirect them to the "New Meal Plan" page.

If ingredients have been added, the list will display them grouped by aisle. The ingredient name and quantity will be provided as well as per the recipe they were added from.
The list can be ticked as the user purchases the items, clicking on the row will cross the ingredient.

Once the user no longer need that shopping list, they can delete it with the "Delete Shopping List" button.

##### > Settings

This page allows the user to save their food restrictions. Anything added will be a pre-set filter on all new meal plan searches.

The user can add their diet(s), their intolerance(s) and any food they simply dislike as ingredients to exclude. One or all fields can be populated before clicking on the "Add Dietary Preferences" button to save the changes.

Below the settings form, the user can keep track of what they have added in the restrictions summary. The user can remove any restriction from this section using the delete button.


## Thank you for reading me.
