FROM node:22-alpine

WORKDIR /app

# Upgrade npm to latest version
RUN npm install -g npm@11.10.0

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

# Generate Prisma Client
RUN npx prisma generate

RUN npm run build

# Copy Prisma generated client to dist
RUN cp -r src/generated dist/

EXPOSE 4003
CMD ["npm", "start"]
