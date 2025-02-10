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

# Convert build args to environment variables
ENV MYSQL_HOST=$MYSQL_HOST
ENV MYSQL_PASS=$MYSQL_PASS
ENV JWT_SECRET=$JWT_SECRET

RUN npm run build
EXPOSE 5000
CMD ["node", "dist/main"]
