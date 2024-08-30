# Starter Backend Service

Hey, there!
We always have to set up a project from scratch every time we want to try something or build something. This project setup process always takes time. That's why I've created a starter service that can be used in any project. All we need to do is follow some simple steps, and our project will be ready to work. So what are you waiting for? Let's dive right in!

## What are included?

In this starter project I've included the followings:

- EsLint to maintain good quality code
- Husky to maintain commit or push bad code
- Prettier to format the code
- VSCode settings so that all members of your team will have same editor config for the project
- ZOD to validate the request params
- Environment configuration
- Good folder structure
- A well response structure both success and error responses
- Dummy database connection setup
- Logging system
- Try Catch wrapper, so you don't need to use try-catch block anywhere

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
   ```
3. Run the following command to install packages
   ```bash
   yarn install
   ```
4. Now run the server in development mode
   ```bash
   yarn dev
   ```

## Containerization

## Features to add
