FROM node:18 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Use Nginx to serve the built Angular app
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 4000
CMD ["nginx", "-g", "daemon off;"]
