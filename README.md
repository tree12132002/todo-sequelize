# todo-sequelize 1.0
* This website provides user with functions to create, read, update, and delete their own todo list.

## Feature
* The user can create an account(with email or Facebook) to manage their todo list.
* The user can see all lists on the home page.
* The user can click the `Detail button` or `restaurant image` to see the clicked one.
* The user can click the `Create button` to create a new todo item.
* The user can click the `Edit button` to edit the todo item.
* The user can click the `Delete button` to delete the todo item.

## How to use it 
* Download with Terminal：
  ```
  git clone https://github.com/tree12132002/todo-sequelize.git
  ```
* Download on the webpage：
  I. Click『Code』
  II. Choose『Download ZIP』
* Open Terminal，`cd` to todo-sequelize file
  I. Install npm packages
  ```
  npm install
  ```
  II. Create todo-swquelize database with MySQL Workbench
  ```
  drop database if exists todo_sequelize;
  create database todo_sequelize;
  use todo_sequelize;
  ```
  II. Create model and default seed
  ```
  npx sequelize db:migrate
  npx sequelize db:seed:all

  ```
* Start the server
  ```
  npm run dev
  ```
* When Terminal show `App is running on http://localhost:3000`, you can use any browser and type http://localhost:3000 to enter the website.
* End the server
  ```
  ctrl + c
  ```

## Default users
Run `npx sequelize db:seed:all`to create a default user.
The user can use the information of default users to login the website.
* email: root@example.com password: 12345678

## Environment Variable
Rename the file `.env.example` to `.env` so that you can run the app successfully.
Or you can create a file named `.env` and type the following content inside.
```
FACEBOOK_ID=SKIP
FACEBOOK_SECRET=SKIP
FACEBOOK_CALLBACK=http://localhost:3000/auth/facebook/callback
SESSION_SECRET=ThisIsMySecret
PORT=3000`

```
