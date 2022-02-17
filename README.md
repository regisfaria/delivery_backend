# Delivery App Backend

## Overview

This project is a Delivery App Backend created with **Typescript, Prisma, Express, Bcrypt and JsonWebToken**.

In this project we have the following entities:

- **Clients**: They're are responsible to create deliveries;

- **Deliveries**: They're the items to be delivered;

- **Deliverymans**: They're the ones responsible for pickup the deliveries and make them finished.

It's a simple version of a delivery backend, much more could be done, even on handling errors/data integrity. But it haven't been done since it's a project for learning purposes only.

Feel free to fork and/or contribute.

## Installation & Running

- First of all, you will need the following dependencies: **PostgreSQL**, **Node stable** and **Yarn/NPM**.

- Install the project dependencies with: `yarn` *or* `npm install`

- You will find a file called `.env.example` in the project's root folder. You must **copy it** to a file called `.env` **AND** replace the variable `DATABASE_URL` with your database information(url and desired DB).

- Now you must run the database migrations with: `yarn prisma migrate dev` *or* `npm run prisma migrate dev`

- After that, you're all set 🎉! Run the project with: `yarn dev` *or* `npm run dev`, it will be listening on **port 3333**.

*This project also contains tests, you can run it with `yarn test` or `npm run test`*

I haven't develop a documentation for this project, although I've added a file called `"endpoints.json"` in the project's root folder. You can use it to import all the existing routes.

## Contact

Email: **regisprogramming@gmail.com**

[LinkedIn](https://www.linkedin.com/in/regissfaria/) Profile

[GitHub](https://github.com/regisfaria) Profile

[GitLab](https://gitlab.com/regisfaria) Profile
