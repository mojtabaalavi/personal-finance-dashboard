FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

# Build TypeScript
RUN npm run build 

EXPOSE 4000
CMD ["npm", "start"]
