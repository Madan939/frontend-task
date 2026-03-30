# Tasks Backend API

A simple Node.js backend for managing profiles with authentication, JWT token handling, and Swagger API documentation. Designed to demonstrate a real-world API workflow including register, login, refresh tokens, CRUD operations, pagination, and search.

---

## Features

- **User Authentication**
  - Register new users
  - Login with email & password
  - JWT access token (expires in 15 min)
  - JWT refresh token (expires in 7 days)
  - Token refresh endpoint
  - Logout endpoint (invalidate refresh token)

- **Profiles Management**
  - List profiles with **pagination** and **search**
  - Create, Update, Delete profiles
  - Each profile includes: `name`, `email`, `phone`, `address`, `dob`
  - Secure endpoints using JWT middleware

- **API Documentation**
  - Swagger UI at `/api-docs`
  - Full documentation for Auth & Profiles endpoints
  - Request & Response examples included

---

## Tech Stack

- **Node.js** v20+
- **Express.js** – API framework
- **jsonwebtoken** – JWT auth
- **cors** – Cross-Origin support
- **dotenv** – Environment variables
- **swagger-jsdoc** + **swagger-ui-express** – API documentation

---

## Project Structure
