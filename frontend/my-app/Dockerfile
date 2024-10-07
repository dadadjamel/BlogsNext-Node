# frontend/Dockerfile

# Base image
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Build the Next.js app
RUN npm run build

# Serve the app
EXPOSE 3000
CMD ["npm", "run", "dev"]
