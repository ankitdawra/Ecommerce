# Use the official Node.js image to build the app
FROM node:18
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# Build args (from GitHub Actions)
ARG ELASTIC_HOST
ARG MONGO_HOST

# Convert build args to environment variables
ENV ELASTIC_HOST=$ELASTIC_HOST
ENV MONGO_HOST=$MONGO_HOST

RUN npm run build
EXPOSE 6000
CMD ["npm", "run", "start"]
# CMD ["node", "dist/main"]
