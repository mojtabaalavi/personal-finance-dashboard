FROM node:22-alpine

WORKDIR /app

# Upgrade npm to latest version
RUN npm install -g npm@11.10.0

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

# Build TypeScript
RUN npm run build 

EXPOSE 4000
CMD ["npm", "start"]
