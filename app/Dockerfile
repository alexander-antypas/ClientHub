FROM node:18-alpine AS development
ENV NODE_ENV development
# Add a work directory
WORKDIR /app
COPY . .
COPY package*.json ./
RUN npm install
# Expose port
EXPOSE 3000
# Start the app
CMD ["npm", "start" ]