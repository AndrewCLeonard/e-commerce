# E-commerce Back End

## User Story

AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

Acceptance Criteria

GIVEN a functional Express.js API...

| WHEN I...                                                                                | THEN...                                                                        |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| add my database name, MySQL username, and MySQL password to an environment variable file | I am able to connect to a database using Sequelize                             |
| enter schema and seed commands                                                           | a development database is created and is seeded with test data                 |
| enter the command to invoke the application                                              | my server is started and the Sequelize models are synced to the MySQL database |
| open API GET routes in Insomnia for categories, products, or tags                        | the data for each of these routes is displayed in a formatted JSON             |
| test API POST, PUT, and DELETE routes in Insomnia                                        | I am able to successfully create, update, and delete data in my database       |

## Database Models

-   `Category`

    -   `id`
        -   Integer
        -   Doesn't allow null values
        -   Set as primary key
        -   Uses auto increment
    -   `category_name`
        -   String
        -   Doesn't allow null values

-   `Product`

    -   `id`
        -   Integer
        -   Doesn't allow null values
        -   Set as primary key
        -   Uses auto increment
    -   `product_name`
        -   String
        -   Doesn't allow null values
    -   `price`
        -   Decimal
        -   Doesn't allow null values
        -   Validates that the value is a decimal
    -   `stock`
        -   Integer
        -   Doesn't allow null values
        -   Set a default value of 10
        -   Validates that the value is numeric
    -   `category_id`
        -   Integer
        -   References the category model's id

-   `Tag`

    -   `id`
        -   Integer
        -   Doesn't allow null values
        -   Set as primary key
        -   Uses auto increment
    -   `tag_name`
        -   String

-   `ProductTag`

    -   `id`
        -   Integer
        -   Doesn't allow null values
        -   Set as primary key
        -   Uses auto increment
    -   `product_id`
        -   Integer
        -   References the product model's id
    -   `tag_id`
        -   Integer
        -   References the tag model's id

## Associations

-   `Product` belongs to `Category`, as a category can have multiple products but a product can only belong to one category.
-   `Category` has many `Product` models.
-   `Product` belongs to many `Tag` models. Using the `ProductTag` through model, allow products to have multiple tags and tags to have many products.
-   `Tag` belongs to many `Product` models.

## Packages

### dependecies

| dependency | description                                                                                                                                                                                                                                                            |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dotenv     | <ul><li>`.env` file loads environment variables into Node's `process.env`, a property that returns an object conaining the user environment</li><li>allows devs to store user environment configuration (passwords, secrets, keys, etc.) separate from code </li></ul> |
| express    |                                                                                                                                                                                                                                                                        |
| mysql2     |                                                                                                                                                                                                                                                                        |
| sequelize  | <ul><li>manage objects using js, and sequelize translates it into the database schema and queries using SQL. </li><li>sits between server's API endpoitns and the SQL database to translate and normalize data between JavaScript and SQL.</li></ul>                   |
| bcrypt     | <ul><li>password hashing</li></ul>                                                                                                                                                                                                                                     |

### dev dependencies

| dev dependency | description |
| -------------- | ----------- |
| nodemon        |             |

## Lessons Learned

-   Configure the Sequelize ORM in a Node.js application.

    -   Set up the application to use Sequelize to manage SQL data.
    -   Use environment variables to protect sensitive data.
    -   Create a user table using Sequelize models.
    -   Create all of the server endpoints using RESTful API standards to work with the User model’s data.

-   Create models for categories, products, and tags in a relational database and a through table that will connect the product and tag models.
-   Define and implement CRUD methods, using Sequelize to interact with your models in each API endpoint through proper RESTful commands (GET, POST, PUT, DELETE).
-   Create and implement Sequelize associations to join tables.
-   Use environment variables to protect sensitive data, such as your MySQL username and password.

### Object-Relational Mapping (ORM)

-   convert data between incompatible type systems using OOP principles
