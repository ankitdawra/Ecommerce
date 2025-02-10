# Use the official Node.js image to build the app
FROM node:18
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# Build args (from GitHub Actions)
ARG MONGO_PASS
ARG ELASTIC_PASS

# Convert build args to environment variables
ENV MONGO_PASS=$MONGO_PASS
ENV ELASTIC_PASS=$ELASTIC_PASS

RUN npm run build
EXPOSE 6000
CMD ["npm", "run", "start"]
# CMD ["node", "dist/main"]
