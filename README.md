# Portfolio — Full-Stack Personal Site

Live: [portfolio-fedeira.vercel.app](https://portfolio-fedeira.vercel.app)

### 📚 Documentation

- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)

### 🔧 Backend & Frontend

- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Frontend](#frontend)

### 📝 License

- [License](#license)

## Project Structure

Below is the organized structure of folders and files in the project:

```
PORTFOLIOFI
├── docker-compose.yml
├── api
│    ├── src
│    │   ├── config
│    │   │    └── config.js
│    │   ├── db
│    │   │    ├── schemas
│    │   │    │      ├── comment.js
│    │   │    │      └── user.js
│    │   │    └── db.js
│    │   ├── middlewares
│    │   │    ├── authentication.middleware.js
│    │   │    ├── error.middleware.js
│    │   │    ├── passport.middleware.js
│    │   │    └── validator.middleware.js
│    │   ├── routes
│    │   │     ├── comments.routes.js
│    │   │     ├── email.routes.js
│    │   │     ├── files.routes.js
│    │   │     ├── user.routes.js
│    │   │     └── index.js
│    │   ├── schemasValidation
│    │   │        ├── comment.schema.js
│    │   │        ├── email.schema.js
│    │   │        └── user.schema.js
│    │   ├── services
│    │   │     ├── authentication
│    │   │     │      └── loginService.js
│    │   │     ├── comments
│    │   │     │      └── commentsService.js
│    │   │     ├── emails
│    │   │     │      └── emailService.js
│    │   │     ├── files
│    │   │     │      └── awsS3Service.js
│    │   │     └── user
│    │   │           └── userService.js
│    │   ├── utils/authenticationStrategies
│    │   │                  ├── jwt.strategy.js
│    │   │                  └── local.strategy.js
│    │   └── app.js
│    ├── uploads
│    │      └── ...
|    ├── Dockerfile
│    ├── index.js
│    ├── package.json
│    └── .env.example
└── client
     ├── index.html
     ├── vite.config.ts
     ├── tailwind.config.js
     ├── biome.json
     ├── src
     │   ├── App.tsx
     │   ├── index.tsx
     │   ├── Assets/
     │   │    └── ...
     │   ├── lib
     │   │    └── axios
     │   │         └── axiosInstance.ts
     │   ├── redux
     │   │    ├── store.ts
     │   │    └── hooks.ts
     |   ├── utils
     │   │     ├── types.ts
     │   │     ├── auth.ts
     │   │     ├── toast.ts
     │   │     └── comments.ts
     │   └── features
     │         ├── Auth/
     │         ├── Comments/
     │         ├── Contact/
     │         ├── Navigation/
     │         └── Portfolio/
     ├── package.json
     └── .env.example
```

See [`client/README.md`](./client/README.md) for the full breakdown of the frontend structure.

## Tech Stack

### Backend

| Technology         | Role                | Notes                                                                |
| ------------------- | ------------------- | --------------------------------------------------------------------- |
| **Node.js + Express** | Core API            | Minimal, unopinionated HTTP framework                                 |
| **MongoDB Atlas**   | Persistence          | Managed MongoDB with automatic backups                                |
| **Mongoose**        | ODM                  | Schema validation and hooks                                           |
| **JWT + Passport**  | Authentication       | Local strategy, stateless token auth                                  |
| **Joi + Boom**       | Validation / Errors  | Request validation and consistent HTTP error responses                |
| **Bcrypt**          | Password hashing     | Configurable salt rounds                                              |
| **AWS S3**          | File storage         | Stores uploaded certificates                                          |
| **Docker**          | Infrastructure       | Reproducible dev/prod environments                                    |

### Frontend

| Technology                | Role                | Notes                                             |
| -------------------------- | ------------------- | -------------------------------------------------- |
| **Vite + `@vitejs/plugin-react-swc`** | Build tool | Dev server and bundler |
| **TypeScript**             | Language             | Strict mode                                        |
| **React 18**                | UI library           |                                                      |
| **Redux Toolkit + react-redux** | State management | `createSlice` / `createAsyncThunk`                 |
| **React Router v6**         | Routing              | `BrowserRouter`, lazy-loaded routes                |
| **Tailwind CSS v3**          | Styling              | Utility-first, no component library, no CSS modules |
| **Framer Motion**           | Animations           | Scroll-triggered section transitions                |
| **Axios**                   | HTTP client          | Single shared instance                              |
| **react-hot-toast**          | Notifications        | Wrapped by a `showToast()` helper                    |
| **Biome**                    | Lint / format        |                                                      |

## Installation

1. `git clone https://github.com/FedeIra/Project-Portfolio.git`

2. You can use branches `main` or `develop`.

## Environment Variables

There is no `.env.example` at the project root — each service has its own:

- `api/.env.example` — copy to `api/.env` and fill in:

  ```bash
  URL_DB=mongodb+srv://...
  PORT=3001
  EMAIL_JS_SERVICEID=email_js_service_id
  EMAIL_JS_TEMPLATEID=email_js_template_id
  EMAIL_JS_PUBLICKEY=email_js_public_key
  EMAIL_JS_PRIVATEKEY=email_js_private_key
  AWS_BUCKET_NAME=aws_bucket_name
  AWS_BUCKET_REGION=aws_bucket_region
  AWS_ACCESS_KEY=aws_access_key
  AWS_SECRET_KEY=aws_secret_key
  JWT_SECRET=secret_key
  ADMIN_UPLOAD_KEY=admin_upload_key
  ```

- `client/.env.example` — copy to `client/.env` and fill in:

  ```bash
  VITE_PRODUCTION_URL=https://your-backend-url
  VITE_DEVELOPMENT_URL=http://localhost:3001
  ```

## Running the Project

### Using Docker:

1. Create `api/.env` and `client/.env` as described above.

2. Check Docker is installed and running on your machine.

3. Build and run the project using the following command in the root of the project directory:

```bash
docker-compose up --build
```

4. Alternatively, you can build and run each service separately:

BACKEND (`api` directory)

```bash
docker build -t portfolio-backend .
docker run -p 3001:3001 --env-file .env portfolio-backend
```

FRONTEND (`client` directory)

```bash
docker build -t portfolio-frontend .
docker run -p 3000:3000 --env-file .env portfolio-frontend
```

### Without Docker:

1. Create `api/.env` and `client/.env` as described above.

2. In each of `api` and `client`:

```bash
npm install
npm start   # api
npm run dev # client
```

# Backend

## Architecture and Responsibilities

The backend follows a layered architecture with a clear separation of concerns between routes, services, validation, and persistence:

- **Authentication**: JWT + Passport with a local strategy
- **Validation**: Joi schemas at the request boundary, plus service-level checks
- **Error handling**: Centralized middleware mapping errors to HTTP status codes via Boom
- **File storage**: AWS S3 for certificate uploads, with metadata tracked per file
- **Persistence**: MongoDB via Mongoose

## Endpoints Overview

- **User lifecycle**: registration, login, and token refresh
- **Email**: contact form messages sent via EmailJS
- **Comments**: CRUD for visitor comments
- **Certificates**: CRUD for uploaded certificate files, backed by S3

## API Endpoints

Full request/response details, including auth headers and example payloads, live in a Postman collection instead of being duplicated here:

[`api/postman/portfolio-api.postman_collection.json`](./api/postman/portfolio-api.postman_collection.json)

Import it into Postman and set the `base_url`, `token` (JWT from `/login`), and `admin_key` (`ADMIN_UPLOAD_KEY`) collection variables to run requests against a local or deployed instance.

| Endpoint | Method | Auth |
|---|---|---|
| `/sign-up` | POST | — |
| `/login` | POST | — |
| `/refresh-token` | POST | — |
| `/sendEmail` | POST | — |
| `/comments` | GET | — |
| `/comments` | POST | Bearer token |
| `/upload` | POST | `x-admin-key` header |
| `/getListFiles` | GET | — |
| `/getFileData/:fileName` | GET | Bearer token |
| `/getFileUrl/:fileName` | GET | Bearer token |
| `/downloadFile/:fileName` | GET | Bearer token |
| `/deleteFile/:fileName` | DELETE | `x-admin-key` header |

## Error Handling

Errors and validation failures are handled by `error.middleware.js`, which catches them and sends a response with the corresponding HTTP status code and message. Validation uses Joi; error shaping uses Boom.

Examples of error responses (bad request and internal error) are shown below.

```json
{
  "statusCode": 400,
  "error": "Bad Request",
  "message": "Date is required. \"asd\" is not allowed"
}
```

```json
{
  "statusCode": 500,
  "error": "Internal Server Error",
  "message": "Error sending email: incorrect service id key."
}
```

## Frontend

The frontend is a Vite + TypeScript single-page React app, with state managed by Redux Toolkit and styling handled by Tailwind CSS. Code is organized by feature (`Auth`, `Comments`, `Contact`, `Navigation`, `Portfolio`), each with its own `components/`, `service/`, and `state/` (Redux slice) folders.

- **State management**: Redux Toolkit slices with `createAsyncThunk` for API calls; auth state persists to `localStorage`
- **Routing**: React Router v6, lazy-loaded routes
- **Styling**: Tailwind CSS utility classes, no component library or CSS modules
- **Animations**: Framer Motion, with a shared fade/slide pattern for scroll-triggered sections
- **Notifications**: react-hot-toast, always called through a `showToast()` wrapper

See [`client/README.md`](./client/README.md) for full details on the frontend architecture, folder structure, and conventions.

## License

This project is licensed under the MIT License. See the [LICENSE.txt](./LICENSE.txt) file for details.

