# Use the official Node.js image as the base image
FROM node:14-alpine

# Create a directory for the app files and set it as the working directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 

COPY . .

# Set the environment variables for the app (optional)
ENV NODE_ENV=preprod
ENV PORT=888

# Expose the port that the app listens on (optional)
EXPOSE 888

# Start the app
CMD [ "node", "server.js" ]
