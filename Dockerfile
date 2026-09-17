# ============================================
# Stage 1: Dependencies Installation Stage
# ============================================
ARG NODE_VERSION=24-alpine

FROM node:${NODE_VERSION} AS dependencies

WORKDIR /app

COPY package.json package-lock.json* ./

RUN --mount=type=cache,target=/root/.npm \
  npm ci --no-audit --no-fund

# ============================================
# Stage 2: Build Next.js Static Export
# ============================================

FROM node:${NODE_VERSION} AS builder

WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# ============================================
# Stage 3: High-Performance Static Runner (Nginx)
# ============================================

FROM nginx:alpine AS runner

# Security: Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy static export artifacts from builder stage
COPY --from=builder /app/out /usr/share/nginx/html

# Custom hardened Nginx configuration with security headers & gzip
RUN printf 'server {\n\
    listen 80;\n\
    server_name localhost;\n\
    root /usr/share/nginx/html;\n\
    index index.html;\n\
\n\
    add_header X-Frame-Options "SAMEORIGIN" always;\n\
    add_header X-Content-Type-Options "nosniff" always;\n\
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;\n\
    add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;\n\
\n\
    gzip on;\n\
    gzip_vary on;\n\
    gzip_proxied any;\n\
    gzip_comp_level 6;\n\
    gzip_types text/plain text/css text/xml application/json application/javascript application/rss+xml application/atom+xml image/svg+xml;\n\
\n\
    location ~* \\.(?:css|js|jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm|htc|woff|woff2)$ {\n\
        expires 1y;\n\
        add_header Cache-Control "public, immutable";\n\
        access_log off;\n\
    }\n\
\n\
    location / {\n\
        try_files $uri $uri/ $uri.html /index.html =404;\n\
    }\n\
\n\
    error_page 404 /404.html;\n\
}\n' > /etc/nginx/conf.d/default.conf

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost:80/ || exit 1

CMD ["nginx", "-g", "daemon off;"]