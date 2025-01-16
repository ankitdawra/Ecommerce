FROM node:18 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2: Serve the application using Node.js
FROM node:18

# Set the working directory for the Node.js server
WORKDIR /app

# Install http-server to serve the Angular build files
RUN npm install -g http-server

# Copy the built Angular files from the previous stage
COPY --from=build /dist/ecommerce /dist

# Expose port 8080 for the HTTP server
EXPOSE 4000

# Command to run the http-server to serve the Angular app
CMD ["http-server", "/dist", "-p", "4000"]


# Use Nginx to serve the built Angular app
# FROM nginx:alpine
# COPY --from=build /app/dist /usr/share/nginx/html
# EXPOSE 4000
# CMD ["nginx", "-g", "daemon off;"]