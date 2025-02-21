# Use the official Node.js image to build the app
FROM node:18
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# Build args (from GitHub Actions)
ARG MYSQL_HOST
ARG MYSQL_PASS
ARG JWT_SECRET
ARG MYSQL_PORT
ARG MYSQL_USERNAME

# Convert build args to environment variables
ENV MYSQL_HOST=$MYSQL_HOST
ENV MYSQL_PASS=$MYSQL_PASS
ENV JWT_SECRET=$JWT_SECRET
ENV MYSQL_PORT=$MYSQL_PORT
ENV MYSQL_USERNAME=$MYSQL_USERNAME

RUN npm run build
EXPOSE 5000
CMD ["node", "dist/main"]
