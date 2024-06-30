# Portfolio Backend

This a backend application using HTTP REST API.

The API provides endpoints to:

- register user,
- login user,
- send email,
- get all comments,
- post comments,
- upload new certificates,
- get all certificates data,
- get specific certificate data,
- get certificate url, and
- get certificate file.

## Table of Contents

- [Project Structure](#project-structure)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [License](#license)

## Project Structure

Below is the organized structure of folders and files in the project:

```
PORTFOLIOFI
├── api
│    ├── src
│    │   ├── Db
│    │   │    ├── ControllersDB
│    │   │    │        └── comments.js
│    │   │    ├── Schema
│    │   │    │      ├── comment.js
│    │   │    │      └── user.js
│    │   │    └── db.js
│    │   ├── middlewares
│    │   │    ├── error.handler.js
│    │   │    └── validator.handler.js
│    │   ├── routes
│    │   │     └── index.js
│    │   ├── schemasValidation
│    │   │        └── user.schema.js
│    │   ├── services
│    │   │     ├── awsServices
│    │   │     └── userServices
│    │   │           ├── login.service.js
│    │   │           └── user.service.js
│    │   ├── utils/authentication
│    │   │           ├── strategies
│    │   │           │       ├── jwt.strategy.js
│    │   │           │       └── local.strategy.js
│    │   │           └── index.js
│    │   └── app.js
│    ├── uploads
│    │      └── ...
│    ├── config.js
│    ├── index.js
│    ├── package.json
│    └── .env
└── client
     ├── public
     │    ├── index.html
     │    └── ...
     ├── src
     │   ├── actions
     │   │    └── ...
     │   ├── assets
     │   │    └── ...
     │   ├── components
     │   │    └── ...
     │   ├── reducer
     │   │    └── index.js
     │   ├── store
     │   │    └── index.js
     |   ├── utils
     │   │     ├── comments
     │   │     │     └── ...
     │   │     ├── general
     │   │     |     └── ...
     │   │     └── index.js
     |   ├── App.js
     |   └── index.js
     ├── package.json
     └── .env
```

## Architecture

Below, an image the architecture of the project is shown:

![Project Architecture](./assetsDocumentation/Architecture.drawio.png)

## Tech Stack

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Javascript**: High-level, interpreted programming language.
- **Express**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **MongoDB**: A NoSQL database that stores data in flexible, JSON-like documents. For this project im using MongoDB Atlas. MongoDB Atlas is a fully managed cloud database service.
- **Mongoose**: A MongoDB object modeling tool designed to work in an asynchronous environment.
- **Docker**: A platform for developing, shipping, and running applications in containers.
- **JWT and Passport**: JSON Web Token (JWT) is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. Passport is Express-compatible authentication middleware for Node.js.
- **Email.js**: A Node.js module for sending emails.
- **AWS S3**: Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance.
- **Joi and Boom**: Joi is a powerful schema description language and data validator for JavaScript. Boom is a set of utilities for returning HTTP errors.
- **Bcrypt**: A library to help you hash passwords.
- **Docker**: A platform for developing, shipping, and running applications in containers.

## Installation

1. git clone https://github.com/your-repo/movie-challenge-backend.git

2. You can use branches master or develop.

3. cd backend-nodejs

## Environment Variables

Create a `.env` file in the root of the project and add the following environment variables. You can check for such purpose the `.env.example` file in the root of the project:

```bash
PORT=3001
HOST=0.0.0.0
TMDB_API_KEY=tmdb-api-key
TMDB_BASE_URL=https://api.themoviedb.org/3
CONNECTION_STRING_DB=mongodb_connection_string
DB_NAME=Movie-Challenge
USER_COLLECTION_NAME=Users
JWT_SECRET=secret-key
```

## Running the Project

### Using Docker:

1. Create a `.env` as described previously.

2. Check Docker is installed and running on your machine.

3. Build and run the containers in backend-nodejs directory with the following commands:

BACKEND Y FRONTED:

```bash
docker-compose up --build
```

BACKEND (api directory)

```bash
docker build -t portfolio-backend .
docker run -p 3001:3001 --env-file .env portfolio-backend
```

FRONTED (client directory)

```bash
docker build -t portfolio-frontend .
docker run -p 3000:3000 --env-file .env portfolio-frontend
```

### Without Docker:

1. Create a `.env` as described previously.

2. Run either of following commands to start the server:

```bash
npm start
npm run dev
```

## API Endpoints

- Fetch Movies

  - URL: /movies
  - Method: POST
  - Body:

    ```json
    {
      "filters": {
        "genre": "string",
        "recommended": "boolean",
        "year": "number"
      },
      "sorts": {
        "byDate": "boolean",
        "byAverage": "boolean"
      }
    }
    ```

Note: This endpoint does not require authentication. In most cases, applications and websites allows users to browse movies without being logged in. However, if you want to add a movie to the wishlist or watch more details, you need to be authenticated. This is a common practice in the industry.

Example of response:

```json
[
  {
      "id": 786892,
      "title": "Furiosa: A Mad Max Saga",
      "poster": "https://image.tmdb.org/t/p/original/aKrDLfQX30tHaTIC2ZRAxG2PbQw.jpg/iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
      "description": "As the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus. Sweeping through the Wasteland they come across the Citadel presided over by The Immortan Joe. While the two Tyrants war for dominance, Furiosa must survive many trials as she puts together the means to find her way home.",
      "average": 7.686,
      "releaseDate": "2024-05-22",
      "genres": [
          "Action",
          "Adventure",
          "Science Fiction"
      ]
  },
  {
      "id": 573435,
      "title": "Bad Boys: Ride or Die",
      "poster": "https://image.tmdb.org/t/p/original/aKrDLfQX30tHaTIC2ZRAxG2PbQw.jpg/nP6RliHjxsz4irTKsxe8FRhKZYl.jpg",
      "description": "After their late former Captain is framed, Lowrey and Burnett try to clear his name, only to end up on the run themselves.",
      "average": 7.478,
      "releaseDate": "2024-06-05",
      "genres": [
          "Action",
          "Crime",
          "Thriller"
      ]
  },
  ...
]
```

- Fetch TV Show Details

  - URL: /tvshow-details
  - Method: POST
  - Authorization Header:

    ```json
      Bearer Token <token>
    ```

  - Body:

    ```json
    {
      "tvshowId": "string"
    }
    ```

Example of response:

```json
{
    "id": 15,
    "title": "Mister Rogers' Neighborhood",
    "poster": "https://image.tmdb.org/t/p/original/qhbeRYVg120cBmc9XvGxvk6EmJF.jpg",
    "average": 5.351,
    "releaseDate": "1968-02-19",
    "genres": [
        "Kids"
    ],
    "numberOfSeasons": 31,
    "director": [
        {
            "id": 1074129,
            "credit_id": "52532eb819c295794000402c",
            "name": "Fred Rogers",
            "original_name": "Fred Rogers",
            "gender": 2,
            "profile_path": "/d000aVyO5zYls7MrSCU6EhG4eoz.jpg"
        }
    ],
    "seasons": [
        {
            "seasonNumber": 0,
            "seasonId": 246353,
            "releaseDate": "1968-06-07",
            "totalEpisodes": 1
        },
        {
            "seasonNumber": 1,
            "seasonId": 137656,
            "releaseDate": "1968-02-19",
            "totalEpisodes": 130
        },
        ...
    ]
}
```

- Register User

  - URL: /register-user
  - Method: POST
  - Body:

  ```json
  {
    "username": "string",
    "password": "string",
    "email": "string"
  }
  ```

  Example of response:

  ```json
  {
    "username": "Ejemplo2",
    "email": "Ejemplo2@gmail.com",
    "wishList": [],
    "createdAt": "2024-06-08T19:09:10.488Z"
  }
  ```

- Login User

  - URL: /login
  - Method: POST
  - Body:

  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```

  Example of response:

  ```json
  {
    "username": "Ejemplo1",
    "email": "Ejemplo1@gmail.com",
    "wishList": [
      {
        "title": "Rush Hour",
        "id": 123123,
        "image": "posterExample",
        "_id": "6663e2feaa6483ee107b538d"
      },
      {
        "title": "Lord of the rings",
        "id": 876345,
        "image": "posterExample4",
        "_id": "6663e31baa6483ee107b5394"
      },
      {
        "title": "Lord of the rings 3",
        "id": 8763,
        "image": "posterExample2",
        "_id": "6663ec122881baa2859fe579"
      }
    ],
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  ```

- Refresh JWT Access Token

  - URL: /refresh-token
  - Method: POST
  - Authorization Header:

    ```json
      Bearer Token <token>
    ```

  - Body:

  ```json
  {
    "currentToken": "string"
  }
  ```

  Example of response:

  ```json
  {
    "newToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  ```

- Add Movie or TV Show to Wishlist

  - URL: /add-to-wishlist
  - Method: POST
  - Authorization Header:

    ```json
      Bearer Token <token>
    ```

  - Body:

  ```json
  {
    "userId": "string",
    "mediaId": "string",
    "mediaType": "string"
  }
  ```

  Example of response:

  ```json
  {
    "message": "Added to wishlist. Enjoy!"
  }
  ```

## Error Handling

Errors are handled using custom error classes to provide structured error responses. The following error classes are defined:

- CustomError: Base class for all custom errors.
- ClientError: Represents client-side errors (status code 400).
- ServerError: Represents server-side errors (status code 500).
- UnauthorizedError: Represents authentication errors (status code 401).

Errors are caught in the Fastify error handler (error.ts) and sent as a response to the client.

```json
├── server
│   ├── handlers
│   │   └── ...
│   ├── errors.ts
│   └── main.ts

```

Some examples of error responses:

```json
{
  "errorCode": 400,
  "error": "Bad request.",
  "validationErrors": [
    {
      "path": "username",
      "message": "Expected string, received number"
    }
  ]
}
```

```json
{
  "errorCode": 500,
  "error": "Internal server error.",
  "errorDetails": {
    "message": "Email already in use.",
    "stack": "Error: Email already in use.\n    at DataBaseServices.registerUser (file:///app/src/services/users/userService.ts:47:15)\n    at processTicksAndRejections (node:internal/process/task_queues:96:5)\n    at async RegisterUserUseCase.registerUser (file:///app/src/useCases/users/registerUserUseCase.ts:31:12)\n    at async Object.<anonymous> (file:///app/server/handlers/registerUserHandler.ts:37:9)"
  }
}
```

## License

This project is licensed under the MIT License. See the [LICENSE](./assetsDocumentation/LICENSE.txt) file for details.

## Author

Federico Irarrazaval

- LinkedIn: https://www.linkedin.com/in/federicoirarrazaval/?locale=en_US
- Email: fedeirar@gmail.com
- Portfolio: https://portfolio-fedeira.vercel.app/
- GitHub: https://github.com/FedeIra
