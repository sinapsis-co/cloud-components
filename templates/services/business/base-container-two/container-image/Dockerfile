# Use an official Node.js runtime as a parent image
FROM  --platform=linux/amd64 node:14-alpine

RUN apk --no-cache add curl

ENV BASE_PATH=/container/one


# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN yarn

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 8080
EXPOSE 8080

HEALTHCHECK --interval=10s --timeout=30s --start-period=5s --retries=3 CMD curl -f http://localhost:8080/api/status || exit 1

# Start the application
CMD [ "npm", "start" ]