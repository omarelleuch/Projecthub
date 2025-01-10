# ProjectHub

ProjectHub is a full-stack web application that allows users to register, log in, and manage projects. It includes a React frontend and an Express backend with a PostgreSQL database.

---

## Features

- **User Authentication**:
  - Sign up with full name, email, and password.
  - Log in with email and password.
  - JWT-based authentication for secure access.

- **Project Management**:
  - Create, update, and delete projects.
  - Assign users to projects and give them tasks.

- **Responsive Design**:
  - Built with React and CSS for a seamless user experience.

---

## Technologies Used

### Frontend
- **React**: JavaScript library for building the user interface.
- **Axios**: For making HTTP requests to the backend.
- **CSS**: For styling the components.

### Backend
- **Express**: Node.js framework for building the REST API.
- **PostgreSQL**: Relational database for storing user and project data.
- **bcryptjs**: For hashing passwords.
- **jsonwebtoken**: For generating and verifying JWT tokens.

### Tools
- **Node.js**: JavaScript runtime for the backend.
- **Nodemon**: For automatically restarting the server during development.
- **Postman**: For testing API endpoints.

---

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- **Node.js**: Install Node.js from [nodejs.org](https://nodejs.org/).
- **PostgreSQL**: Install PostgreSQL from [postgresql.org](https://www.postgresql.org/).
- **Git**: Install Git from [git-scm.com](https://git-scm.com/).

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/ProjectHub.git
   cd ProjectHub
   ```
2. **Set Up the Backend**:
   - Navigate to the `Backend` folder:
     ```bash
     cd Backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `Backend` folder and add the following environment variables:
     ```env
     DATABASE_URL=postgres://your_db_user:your_db_password@localhost:5432/your_db_name
     JWT_SECRET=your_jwt_secret_key
     PORT=5000
     ```
   - Start the backend server:
     ```bash
     npm start
     ```

3. **Set Up the Frontend**:
   - Navigate to the `Frontend` folder:
     ```bash
     cd ../Frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the frontend development server:
     ```bash
     npm start
     ```

4. **Set Up the Database**:
   - Connect to your PostgreSQL database and run the following SQL commands to create the `users` table:
     ```sql
     CREATE TABLE users (
       id SERIAL PRIMARY KEY,
       full_name VARCHAR(255) NOT NULL,
       email VARCHAR(255) UNIQUE NOT NULL,
       password VARCHAR(255) NOT NULL
     );
     ```

---

## API Endpoints

### Authentication
- **POST `/api/auth/register`**: Register a new user.
  - Request Body:
    ```json
    {
      "fullName": "John Doe",
      "email": "john@example.com",
      "password": "password123"
    }
    ```
  - Response:
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
    ```

- **POST `/api/auth/login`**: Log in an existing user.
  - Request Body:
    ```json
    {
      "email": "john@example.com",
      "password": "password123"
    }
    ```
  - Response:
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
    ```

### Projects
- **GET `/api/projects`**: Get all projects.
- **POST `/api/projects`**: Create a new project.
- **PUT `/api/projects/:id`**: Update a project.
- **DELETE `/api/projects/:id`**: Delete a project.



