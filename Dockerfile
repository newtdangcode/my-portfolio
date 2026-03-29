# Stage 1: Build the Next.js App Router website
FROM node:22-alpine AS builder

WORKDIR /app

# Prioritize copying package.json and lock file to leverage Docker cache
COPY package.json package-lock.json ./
RUN npm ci

# Copy the entire source code into the container
COPY . .

# Run the build. Since we configured output: 'export', Next.js will build to the /out directory
RUN npm run build

# Stage 2: Serve using Nginx
FROM nginx:alpine

# Remove default Nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy the static exported build from Stage 1 (Next.js /out directory) to Nginx
COPY --from=builder /app/out /usr/share/nginx/html

# Copy the custom Nginx routing configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
