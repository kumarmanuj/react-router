# React Router

A modern, lightweight React application built with TypeScript, featuring client-side routing with React Router and a custom Express server for proper 404 handling.

## 🚀 Features

- React 18 with TypeScript
- React Router for seamless client-side navigation
- Express server with correct 404 status code handling
- npm for efficient package management
- Docker support for easy deployment and scaling

## 🛠️ Prerequisites

- Node.js (v14 or later)
- npm package manager
- Docker (optional, for containerization)


## 🚦 Getting Started

### Clone the repository

  ```git
git clone https://github.com/kumarmanuj/react-router.git
   ```

### Change your current directory to the project directory

  ```bash
   cd react-router
  ```

### Install dependencies

  ```npm
   nmp run install:all
  ```

### Build the client

  ```npm
   nmp run build
  ```

### Start the server

  ```npm
   nmp start
  ```

The application will be available at `http://localhost:3000`.

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in production mode (serves the built client via Express)
- `npm start:client`: Runs the client app in development mode
- `npm start:server`: Starts the Express server
- `npm build`: Builds the client app for production
- `npm run install:all`: Installs dependencies for the root, client, and server

## Docker

To build and run the application using Docker:

### Build the Docker image

  ```docker
   docker build -t react-router .
  ```

### Run the Docker container

  ```docker
   docker run -p 3000:3000 react-router
  ```

The application will be available at `http://localhost:3000`.

## Project Structure Details

- `client/`: Contains the React application
- `src/`: Source files for the React app
- `public/`: Public assets
- `server/`: Contains the Express server
- `Dockerfile`: Instructions for building the Docker image
- `.gitignore`: Specifies intentionally untracked files to ignore

## Contact

For any inquiries or feedback, feel free to reach out:

- Email: [yomanuj@gmail.com](mailto:yomanuj@gmail.com)
- GitHub: [kumarmanuj](https://github.com/kumarmanuj)

## License

This project is licensed under the [MIT License](./LICENSE)
