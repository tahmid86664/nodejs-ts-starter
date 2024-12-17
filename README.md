# NodeJS TS Starter Backend Service

Hey, there!
We always have to set up a project from scratch every time we want to try something or build something. This project setup process always takes time. That's why this project is created and this can be used in any project. All we need to do is follow some simple steps, and our project will be ready to work. So what are you waiting for? Let's dive right in!

## Major Dependencies

- MongoDB as Database
- Typegoose as ORM

## What are included?

In this starter project I've included the followings:

- Updated EsLint to maintain good quality code
- Husky to maintain commit or push bad code
- Prettier to format the code
- VSCode settings so that all members of your team will have same editor config for the project
- ZOD to validate the request params
- Environment configuration using config
- Good folder structure
- A well response structure both success and error responses
- Dummy database connection setup
- Logging system using winston
- Simple github action workflow
- Try Catch wrapper, so you don't need to use try-catch block anywhere
- Firebase authorization example
- JWT usage example
- Example of sending mail (SMTP) using NodeMailer

## Installation

1. First clone the repository.
   ```bash
   git clone git@github.com:tahmid86664/nodejs-ts-starter.git
   ```
2. Create a .env file in the root directory and assign values in these following environment variables.

   ```python
   PROJECT_NAME = "Your Project Name"
   PORT = "Port number you want run your backend server"
   SERVER_BASE_URL = "Base URL of the server, such as for localhost the valu may http://localhost:8080"
   ENVIRONMENT = "Current environment of this project such as, DEV (development) or PROD (production)"

   # * More, more and more. Whatever you need ...
   ```

3. Run the following command to install packages
   ```bash
   yarn install
   ```
4. Now run the server in development mode
   ```bash
   yarn dev
   ```

## Addons

1. Remove the current remote Github connection and add your own repository as remote.
   ```bash
   git remote remove origin
   git remote add origin <SSH or HTTPS of your github repository>
   ```

## Containerization

Not added yet.

## API Documentation

[API Documentation](https://api-doc.example.com)
