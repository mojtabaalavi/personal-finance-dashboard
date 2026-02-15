FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Generate Prisma Client
RUN npx prisma generate

RUN npm run build 

EXPOSE 4003
CMD ["npm", "start"]
