# Use the official Node.js image to build the app
FROM node:18
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 6000
CMD ["npm", "run", "start"]
# CMD ["node", "dist/main"]
