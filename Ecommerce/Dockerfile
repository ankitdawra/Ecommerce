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

# FROM node:16
# WORKDIR /app
# RUN npm install -g serve
# COPY --from=build /app/dist/your-angular-project-name /usr/share/nginx/html
# EXPOSE 4000
# CMD ["serve", "-s", "/usr/share/nginx/html", "-l", "5000"]
