# backend/Dockerfile

# Use Node.js base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Install TypeScript globally
RUN npm install -g typescript

# Build the application
RUN npm run build

# Expose the backend API port
EXPOSE 4000

# Start the Express server
CMD ["npm", "run", "dev"]