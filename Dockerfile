# Giai đoạn 1: Build trang web Next.js App Router
FROM node:22-alpine AS builder

WORKDIR /app

# Ưu tiên copy package.json và lock file trước để tận dụng cache
COPY package.json package-lock.json ./
RUN npm ci

# Copy toàn bộ mã nguồn vào container
COPY . .

# Chạy build project. Vì chúng ta cấu hình output: 'export', Next.js sẽ build ra thư mục /out
RUN npm run build

# Giai đoạn 2: Phục vụ bằng Nginx
FROM nginx:alpine

# Xóa các file mặc định của Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copy kết quả tĩnh đã build từ giai đoạn 1 (thư mục /out của Nextjs) sang nginx
COPY --from=builder /app/out /usr/share/nginx/html

# Copy file cấu hình điều hướng Nginx riêng
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
