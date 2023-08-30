# BusyBytes

BusyBytes is the ultimate app designed specifically for tech enthusiasts like you, offering a seamless solution to streamline your meal planning, grocery shopping and cooking processes.
With BusyBytes, you can indulge on your coding passion while enjoying delicious, hassle-free meals.

## Table of Contents

- [Setup](#setup)
  - [Dependencies](#dependencies)
  - [Database Prep](#database-prep)
  - [Run Your Development Servers](#run-your-development-servers)
- [App Info](#app-info)
  - [Back End](#back-end)
    - [API](#api)
    - [Database Tables](#database-tables)
    - [Routes](#routes)
  - [Front End](#front-end)
    - [Landing Page](#landing-page)
    - [User Flow](#user-flow)
      - [Profile Page](#profile-page)
      - [Calendar Page](#calendar-page)
      - [New Meal Plan](#new-meal-plan)
      - [Recipe Repo](#recipe-repo)
      - [Recipe Page](#recipe-page)
      - [Shopping List](#shopping-list)
      - [Settings](#settings)
- [Conclusion](#conclusion)

## Setup

### Dependencies

- Run `npm install` in the project folder to install dependencies related to Express (the server).

- Then `cd client` and run `npm install` to install dependencies related to React (the client).

### Database Prep

#### | .env File

- Create a `.env` file in project directory to hold sensitive information such as API keys, database credentials, and other environment-specific variables. It's crucial to keep this information separate from your codebase for security reasons. In our case, we will use the .env file to store the credentials needed to access your MySQL database.

- Add the following lines, replacing the placeholders with your actual database credentials:

```
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=mealprepapp
  DB_PASS=YOUR PASSWORD
  SUPER_SECRET=WHATEVER YOU WANT
```

*make sure to replace "YOUR PASSWORD" with your actual MySQL root password*

#### | Create the Database

Before your app can store and retrieve data, you need to set up a database. We'll be using MySQL as our database management system.

- Open your MySQL command-line interface by entering `mysql -u root -p` in your terminal. You'll be prompted to enter your MySQL root password.

- Once you're in the MySQL CLI, create a new database for your app by entering the following command:

```
create database mealprepapp;
```

This command creates a database named mealprepapp that your app will use to store its data.

- After creating the database, we need to update the user authentication method for your MySQL server to allow the app to connect. Enter the following command in the MySQL CLI, replacing YOUR_PASSWORD with your actual MySQL root password:

```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YOUR_PASSWORD';
```

This step is necessary to ensure compatibility between the app and the MySQL server.

#### | Run Migration

Migrations are a way to manage your database schema and keep it in sync with your application's codebase. We'll be using migrations to create the necessary tables for your app.

- In your terminal, navigate to the project directory where your app is located.

- Run the following command to execute the migrations and create the required tables:

```
npm run migrate
```

This command will create a table named 'items' in your mealprepapp database.

With these steps completed, your database will be properly set up, and your app will be able to store and retrieve data seamlessly.

### Run Your Development Servers

- Run `npm start` in your project directory to start the Express server on port 4000.

- `cd client` and run `npm run dev` to start client server in development mode with hot reloading in port 5173.

- Client is configured so all API calls will be proxied to port 4000 for a smoother development experience. Yay!

- You can test your client app in `http://localhost:5173`.

- You can test your API in `http://localhost:4000/api`.

## App Info

### Back End

#### API

The BusyBytes app relies on the Spoonacular API to provide comprehensive food-related information and functionalities. The Spoonacular API is a powerful tool that offers an array of data related to recipes, meal planning, nutrition, and more. This section outlines how the app integrates with the Spoonacular API to enhance its capabilities.

##### What is the Spoonacular API?

The Spoonacular API is a food and recipe-related API that offers a wide range of data and features related to cooking, meal planning, and nutrition. It serves as a valuable resource for developers looking to incorporate food-related content into their applications. With the Spoonacular API, you can access information about ingredients, recipes, nutrition details, meal plans, and more.

##### How BusyBytes Uses the Spoonacular API

In the BusyBytes app, we leverage the Spoonacular API to enhance the user experience and provide valuable features. Here are some key functionalities powered by the Spoonacular API:

* Recipe Information: The Spoonacular API allows us to fetch detailed information about various recipes, including ingredients, preparation instructions, cooking times, and more.

* Nutritional Data: With the help of the Spoonacular API, users can access comprehensive nutritional information for different ingredients and recipes. This data is essential for users who are conscious of their dietary choices.

* Meal Planning: BusyBytes utilises the Spoonacular API to assist users in planning their meals. Users can search for recipes based on dietary preferences, cuisines, and more, making it easier to create personalised meal plans.

* Search and Filters: The Spoonacular API's search capabilities enable users to search for specific recipes or ingredients based on keywords. Filters such as dietary restrictions, meal types, and more help users find suitable options.

* Recipe Recommendations: By analysing user preferences and behaviour, BusyBytes can provide recipe recommendations and suggestions using the Spoonacular API's data.

##### Accessing the Spoonacular API

To access the Spoonacular API, you'll need to sign up for an API key from their official website. The API key acts as an authentication token, allowing your app to communicate with the Spoonacular servers and retrieve the data you need.

For more detailed information on how to interact with the Spoonacular API and the available endpoints, refer to the [Spoonacular documentation](https://spoonacular.com/food-api/docs).

By integrating the Spoonacular API, BusyBytes enriches its capabilities, providing users with a seamless and informative culinary experience.

#### Database Tables

In BusyBytes, data is organised and stored in three main tables within the MySQL database. Each table serves a specific purpose and holds essential information to power the functionalities of the app.

##### User Table

The user table is where user-related information is stored. This table holds data such as user IDs, usernames, email addresses, and profile pictures. It is crucial for user authentication, registration, and personalization. Users' dietary preferences and saved recipes are associated with their respective entries in the user table.

##### Settings Table

The settings table stores individual user preferences and restrictions related to dietary choices. This includes information such as preferred diets (e.g., vegetarian, vegan), intolerances, and ingredients to exclude. These settings serve as filters when users search for recipes, ensuring that the results align with their dietary requirements.

##### Calendar Table

The calendar table is responsible for holding users' meal plans and scheduled recipes. This table contains information about the date, meal type (e.g., breakfast, lunch), and the specific recipe chosen for that meal. It enables users to plan their meals ahead of time and track their consumption over different weeks.

Each table serves a unique role in facilitating the app's functionalities, providing a structured and organized way to manage user data, preferences, and interactions with recipes.

For a visual representation of the database schema, refer to the [schema diagram](/DatabaseSchema.PNG).

The initial creation of these tables was done using SQL, and they were later modified when migrated to Sequelize. For more details on the changes, you can explore the [migration files](/migrations).

#### Routes

The BusyBytes app utilises various routes to handle different functionalities. This section provides an overview of the different types of routes used in the app, including API routes, settings routes, authorization routes, and recipe routes.

##### API Routes

API routes are responsible for communication between the client and the server, facilitating data retrieval and storage. These routes handle requests and responses related to recipes, meal plans, user preferences, and more. API routes are essential for creating a seamless user experience and ensuring data consistency.

##### Settings Routes

Settings routes are focused on managing user preferences and dietary restrictions. These routes allow users to customize their experience by specifying their dietary choices, intolerances, and ingredient exclusions. The information stored through settings routes is used to tailor recipe recommendations and search results to the user's preferences.

##### Authorization Routes

Authorization routes play a crucial role in ensuring secure access to the app's features. These routes handle user registration, login, authentication and user details. By enforcing user authentication, authorization routes help protect user data and ensure that only authorised users can access specific functionalities.

##### Recipe Routes

Recipe routes are at the core of the app's recipe-related features. These routes enable users to search for recipes, view detailed recipe information, and manage their favourites. Additionally, recipe routes facilitate the creation and management of meal plans by allowing users to add recipes to their calendars.

By categorising routes into these distinct types, BusyBytes effectively organises its functionalities and enhances the app's maintainability and scalability.

### Front End

#### Landing page

The first page users can access is the landing page. It provides an overview of the application and allows the user to register or log in to access their information.

Note: this page welcomes users with a cute robot cook custom designed by one of the project's original team member.

#### User Flow

Once registered and logged in, the user has access to a wide variety of pages and actions.
The top bar displays the BusyBytes name, that is also a link to the profile page, and the log out button.

##### Profile page

Upon log in, this is where users first land.
This page displays the user information: profile picture, user name, email, user favourites and preferences.

On that same page the user can modify every piece of information displayed, including the ones provided during registration (name and email).

##### Calendar page

Custom made, this calendar allows the user to naviguate through different weeks (past and future) to see any meal plan already made.

It displays the date and day as well as the different meal types proposed: breakfast, elevensies, lunch, afternoon tea and dinner.

From this page, user can access added meals' recipes, add tried meals to the favourites and remove meals from calendar.

##### New Meal Plan

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

##### Recipe Repo

This is the favourites page, any meal added as a favourite will appear on that page.

This page will appear empty by default. If it is the case the user will be given the option to search for meals clicking on the "Search Recipes" button that will redirect them to the "New Meal Plan" page.

The user can remove a meal from the favourites using the cross button. They can also access the recipe page by clicking on the pictures.

##### Recipe page

The recipes cannot be accessed from the menu tabs of the website, as they are different for each meal, they can be accessed through the meal's picture from other pages (calendar, new meal plan, recipe repo).

The recipe page will show the meal name and type, the ingredients list, cooking instructions and nutritional information.

From this page, the user can populate their shopping list should they need to purchase any of the ingredients needed simply by ticking the box for the missing ingredient. 

##### Shopping List

The shopping list page will appear empty by default. If it is the case the user will be given the option to search for meals clicking on the "Search for Recipes" button that will redirect them to the "New Meal Plan" page.

If ingredients have been added, the list will display them grouped by aisle. The ingredient name and quantity will be provided as well as per the recipe they were added from.
The list can be ticked as the user purchases the items, clicking on the row will cross the ingredient.

Once the user no longer need that shopping list, they can delete it with the "Delete Shopping List" button.

##### Settings

This page allows the user to save their food restrictions. Anything added will be a pre-set filter on all new meal plan searches.

The user can add their diet(s), their intolerance(s) and any food they simply dislike as ingredients to exclude. One or all fields can be populated before clicking on the "Add Dietary Preferences" button to save the changes.

Below the settings form, the user can keep track of what they have added in the restrictions summary. The user can remove any restriction from this section using the delete button.


## Conclusion

Congratulations! You've reached the end of our README, and we hope you now have a clear understanding of what BusyBytes has to offer. With its intuitive user interface, comprehensive recipe database, and personalised meal planning features, BusyBytes is your go-to app for simplifying your culinary journey.

Whether you're a seasoned chef or just starting out in the kitchen, BusyBytes is designed to make your meal planning and cooking experiences enjoyable and hassle-free. Unlock the potential of delicious recipes, tailored recommendations, and a customisable meal calendar.

Ready to get started? Why not dive in and experience BusyBytes for yourself? Clone the repository, follow the setup instructions, and explore the world of convenient meal planning and delightful cooking.

We're excited to have you on board, and we can't wait for you to embark on your culinary adventure with BusyBytes!
