FROM node:18-alpine

# Add a work directory
COPY . .
COPY package*.json ./
RUN npm install
# Expose port
EXPOSE 3000
# Start the app
CMD [ "npm", "start" ]