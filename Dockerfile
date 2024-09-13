# Use the official Node.js image.
# The 'slim' variant is a smaller image with only the essentials.
FROM node:22-slim

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) for installing dependencies
COPY package*.json ./

# Install production dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port on which the app will run
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "start"]

