Multi-Level Authentication Project
Welcome to the Multi-Level Authentication Project! This project demonstrates different levels of authentication using Node.js, Express, MongoDB, and various authentication strategies. Each level introduces a new approach to securing user data and access to the application.

Features
This project includes the following authentication levels:

Level 1: Basic User Authentication

User registration and login using a simple username and password.
Access paths: /login and /register
Level 2: Encrypted Passwords

Enhanced security through encrypted passwords.
Access paths: /login and /register
Level 3: Hashed Passwords

Storage of hashed passwords in the database.
Access paths: /login and /register
Level 4: Hashed Passwords with Salting

Increased security with password hashing and salting.
Access paths: /login and /register
Level 5: Session-Based Authentication

Implementation of session-based authentication for persistent user sessions.
Access paths: /login, /register, and /secrets
Level 6: OAuth2.0 Authentication (Google)

Introduction of Google OAuth2.0 authentication for a secure and convenient login process.
Access paths: /auth/google, /auth/google/secrets, /login, /register, /secrets, /submit, /logout
Installation
Clone this repository to your local machine.
Navigate to the project directory.
Install the required dependencies.
Create a .env file in the project directory and add your environment variables.
Usage
Run the application.
Access the application in your web browser.
Explore the different authentication paths for each level to experience the features.

Developed with ❤️ by Haniya
