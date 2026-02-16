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

# Create entrypoint script
RUN echo '#!/bin/sh' > /app/docker-entrypoint.sh && \
    echo 'echo "Initializing database schema..."' >> /app/docker-entrypoint.sh && \
    echo 'npx prisma db push --accept-data-loss || echo "Warning: db push failed"' >> /app/docker-entrypoint.sh && \
    echo 'echo "Starting service..."' >> /app/docker-entrypoint.sh && \
    echo 'exec npm start' >> /app/docker-entrypoint.sh && \
    chmod +x /app/docker-entrypoint.sh

EXPOSE 4003
CMD ["/app/docker-entrypoint.sh"]
