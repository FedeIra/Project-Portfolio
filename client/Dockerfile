# Dockerfile for Frontend
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Bundle app source
COPY . .

# Build the React app
RUN npm run build

# Serve the app using a simple HTTP server
RUN npm install -g serve
CMD ["serve", "-s", "build"]

# Expose port
EXPOSE 3000