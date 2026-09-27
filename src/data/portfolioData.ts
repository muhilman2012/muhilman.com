export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  badgeColor: string;
  bullets: string[];
  ctaLabel: string;
  subject: string;
}

export interface CaseStudy {
  id: string;
  badge: string;
  badgeType: 'gov' | 'live' | 'api';
  title: string;
  subtitle: string;
  domainUrl?: string;
  description: string;
  tags: string[];
  metric1: { label: string; value: string };
  metric2: { label: string; value: string; isHighlighted?: boolean };
  gradient: string;
  architectureDetails: {
    overview: string;
    backendStack: string[];
    databaseDesign: string;
    throughputSolution: string;
    dockerNginxConfig: string;
  };
}

export interface TechItem {
  id: string;
  shortCode: string;
  name: string;
  role: string;
  codeColor: string;
  description: string;
  productionUsage: string;
}

export interface Certification {
  id: string;
  badgeCode: string;
  badgeBg: string;
  badgeTextColor: string;
  name: string;
  issuer: string;
}

export const PERSONAL_INFO = {
  name: "Muhammad Hilman",
  domain: "muhilman.com",
  title: "Full-Stack Engineer & Cloud SysAdmin",
  experienceYears: "4+ Thn",
  uptimeRecord: "99.9%",
  responseTime: "< 2 Jam",
  email: "kontak@muhilman.com",
  whatsappUrl: "https://wa.me/6281234567890?text=Halo%20Mas%20Hilman,%20saya%20ingin%20konsultasi%20mengenai%20kebutuhan%20web/server",
  whatsappNumber: "+62 812-3456-7890",
  github: "https://github.com/muhilman",
  linkedin: "https://linkedin.com/in/muhilman",
  marathonPhoto: "https://lh3.googleusercontent.com/aida-public/AB6AXuAU7OdM0djhJ9iUYaNEPs_ARyvJFmeYJNiT_xHBAFY5vnLgba-BUgHV2yIgn5POLnSXzaWgIl1sjOAYoxxT1DmF0DFRKoqwxxBcWcJ7zj-ig28OAOAJX4WWEGeIR-UuhH_vSiUN11MY8XpqzVgAPUun3oyO-Pudcgzgpz5960C6G6mKz0jWCTqqTRruybwosfHkzzVyEzS2RY7MGn7hELDCfMrrB4vsrKWNwPWSy0khwEOSwarnuDzGuyT5WTLPbZgTyQ",
  marathonBib: "Bib M-80078",
  marathonLocation: "Jakarta, Indonesia",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Jasa Pembuatan Aplikasi Web",
    description: "Rancang bangun aplikasi web skala enterprise dan platform interaktif modern berbasis Laravel ecosystem, Vue.js, Tailwind CSS, serta arsitektur API modular yang scalable.",
    icon: "code",
    badgeColor: "bg-blue-600/10 text-blue-600",
    bullets: [
      "Portal Enterprise & Sistem Pengaduan",
      "Platform Turnamen & Live Leaderboard",
      "Optimasi Core Web Vitals & Responsif",
    ],
    ctaLabel: "Konsultasikan Proyek",
    subject: "Inquiry Pembuatan Aplikasi Web",
  },
  {
    id: "troubleshooting",
    title: "Diskusi Teknis & Troubleshooting",
    description: "Sesi konsultasi 1-on-1 untuk memecahkan bug kronis, query database lambat, memory leak, refactoring arsitektur lama, dan audit kesiapan deployment sebelum go-live.",
    icon: "troubleshoot",
    badgeColor: "bg-orange-500/10 text-orange-600",
    bullets: [
      "Database Indexing & Query Profiling",
      "Code Review & Architectural Guidance",
      "Diagnosa Crash 502/504 Bad Gateway",
    ],
    ctaLabel: "Minta Sesi Diskusi",
    subject: "Jadwal Diskusi Teknis",
  },
  {
    id: "infrastructure",
    title: "Server & Cloud Infrastructure",
    description: "Konfigurasi server Linux production, orkestrasi container Docker, tuning Nginx, setup SSL otomatis, mitigasi rate-limit, dan backup redundancy tanpa downtime.",
    icon: "dns",
    badgeColor: "bg-slate-900/10 text-slate-900",
    bullets: [
      "Hardening Server Linux (Ubuntu/Debian)",
      "Dockerization & CI/CD Pipelines",
      "Nginx Reverse Proxy & Redis Tuning",
    ],
    ctaLabel: "Audit Server Sekarang",
    subject: "Kebutuhan Infrastruktur Server",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "lapor-mas-wapres",
    badge: "GovTech / Enterprise",
    badgeType: "gov",
    title: "Sistem Pengaduan Nasional",
    subtitle: "Arsitektur Skala Nasional",
    description: "Inisiatif portal pelayanan publik berskala masif dengan penanganan traffic tak terduga. Dilengkapi proteksi Nginx rate-limiting, pipeline antrian asynchronous, dan deduplikasi data aduan masyarakat.",
    tags: ["Laravel 11", "Redis Cache", "Nginx Hardening", "PostgreSQL"],
    metric1: { label: "Response Time", value: "< 120ms" },
    metric2: { label: "Uptime Status", value: "99.99%", isHighlighted: true },
    gradient: "from-slate-950 to-slate-900",
    architectureDetails: {
      overview: "Sistem pengaduan masyarakat publik yang dioptimasi untuk lonjakan akses viral (traffic spike ribuan rps). Mencegah database connection pool exhaustion dengan caching bertingkat.",
      backendStack: ["Laravel 11 (PHP 8.3 FPM)", "PostgreSQL 16 Partitioned Tables", "Redis Horizon Queues", "MinIO / S3 Object Storage"],
      databaseDesign: "Pemisahan read-write replica, schema indexing multi-column pada status pengaduan dan timestamp NIK hash.",
      throughputSolution: "Rate limiting di layer Nginx (10 req/sec per IP burst 20), background asynchronous queue processing untuk pengiriman email/notifikasi.",
      dockerNginxConfig: "Docker multi-stage Alpine base image, gzip + brotli compression, TLS 1.3 only, proxy_buffer tuning.",
    },
  },
  {
    id: "rginc-online",
    badge: "Live Production",
    badgeType: "live",
    title: "RGInc Pump It Up Platform",
    subtitle: "rginc.online",
    domainUrl: "https://rginc.online",
    description: "Platform turnamen game rhythm arcade Pump It Up. Menangani registrasi kompetisi online, input verifikasi score presisi, dynamic division grouping, serta leaderboard real-time dengan katalog lagu dinamis.",
    tags: ["rginc.online", "Laravel & Livewire", "MySQL Cluster", "Real-time Leaderboard"],
    metric1: { label: "Katalog Lagu", value: "500+ Track Charts" },
    metric2: { label: "Penyelenggaraan", value: "Turnamen Online", isHighlighted: true },
    gradient: "from-slate-950 via-slate-900 to-blue-900",
    architectureDetails: {
      overview: "Komunitas dan turnamen arcade rhythm game aktif berskala nasional dan regional. Menghitung peringkat skor dari ribuan pemain secara langsung.",
      backendStack: ["Laravel 11 & Livewire 3", "MySQL 8.0 with JSON indexing", "Tailwind CSS", "Redis Pub/Sub WebSocket"],
      databaseDesign: "Normalisasi tabel songs, charts (Single/Double, difficulty level 1-28), scores dengan composite hash key pencegah duplikasi upload.",
      throughputSolution: "Optimasi database aggregate query untuk kalkulasi dynamic division rating (tier calculation) secara instan dalam hitungan milidetik.",
      dockerNginxConfig: "Containerized deployment dengan automated Let's Encrypt renewal, persistent uploads volume, dan healthcheck script berkala.",
    },
  },
  {
    id: "wa-gateway",
    badge: "Automation API",
    badgeType: "api",
    title: "WA Gateway & Telegram Bot",
    subtitle: "Microservices & Webhook",
    description: "Pondasi pengiriman notifikasi instan berbasis asynchronous message broker. Menjamin jutaan pesan blast, pelaporan status server 24/7 ke Telegram, dan proteksi dari pemblokiran session.",
    tags: ["Node.js / Baileys", "Telegram Bot API", "Redis Queue", "Dockerized"],
    metric1: { label: "Throughput", value: "500+ Msg/Menit" },
    metric2: { label: "Reliability", value: "Auto Failover", isHighlighted: true },
    gradient: "from-[#064e3b] to-slate-950",
    architectureDetails: {
      overview: "Layanan microservice decoupled untuk gateway perpesanan bisnis dan monitoring server real-time.",
      backendStack: ["Node.js Express / TS & Baileys socket", "BullMQ Redis Queue Broker", "Telegram Bot Webhook Engine", "Docker Compose"],
      databaseDesign: "Redis in-memory store untuk queueing jobs dengan exponential backoff retry dan PostgreSQL untuk audit message delivery logs.",
      throughputSolution: "Concurrency throttling untuk mematuhi rate limit WhatsApp, rotating worker session, serta heartbeat ping otomatis ke Telegram.",
      dockerNginxConfig: "Multi-container bridge network dengan persistent auth credentials folder dan auto-restart on failure (always).",
    },
  },
];

export const TECH_STACK: TechItem[] = [
  {
    id: "php",
    shortCode: "PHP",
    name: "PHP 8.3",
    role: "Core Language",
    codeColor: "text-blue-600",
    description: "Fitur modern JIT compiler, strict type hinting, read-only properties, dan performa tinggi.",
    productionUsage: "Digunakan sebagai runtime inti dengan PHP-FPM dan Swoole engine untuk throughput tinggi.",
  },
  {
    id: "laravel",
    shortCode: "LV",
    name: "Laravel 11",
    role: "Framework",
    codeColor: "text-red-600",
    description: "Framework modern dengan arsitektur elegan, Eloquent ORM, job queues, dan ekosistem terlengkap.",
    productionUsage: "Pondasi utama portal enterprise, API microservices, dan autentikasi aman.",
  },
  {
    id: "vue",
    shortCode: "VU",
    name: "Vue.js / Nuxt",
    role: "Frontend SPA",
    codeColor: "text-emerald-600",
    description: "Reactivity system lincah, Composition API, dan rendering SSR/SSG hemat bandwidth.",
    productionUsage: "Digunakan pada antarmuka admin dashboard, data-table interaktif, dan Livewire hybrid.",
  },
  {
    id: "react",
    shortCode: "RC",
    name: "React & Next",
    role: "Modern UI",
    codeColor: "text-sky-500",
    description: "Standar industri komponen modular, Server Components, dan ekosistem visual mutakhir.",
    productionUsage: "Digunakan untuk portal web interaktif, visualisasi arsitektur, dan single page apps.",
  },
  {
    id: "tailwind",
    shortCode: "TW",
    name: "Tailwind CSS",
    role: "Design System",
    codeColor: "text-cyan-500",
    description: "Utility-first framework dengan performa build ultra cepat dan zero runtime footprint.",
    productionUsage: "Standardisasi design token, responsive layouts, dan dark/light theme consistency.",
  },
  {
    id: "docker",
    shortCode: "DK",
    name: "Docker",
    role: "Containers",
    codeColor: "text-blue-500",
    description: "Isolasi lingkungan development vs production agar identik 100% tanpa dependency mismatch.",
    productionUsage: "Multi-stage Dockerfile untuk Laravel, Nginx, Redis, dan worker background.",
  },
  {
    id: "nginx",
    shortCode: "NX",
    name: "Nginx Engine",
    role: "Reverse Proxy",
    codeColor: "text-emerald-500",
    description: "High-performance web server dengan kemampuan handle ribuan concurrent connections.",
    productionUsage: "SSL termination, FastCGI caching, rate limiting, gzip/brotli static asset compression.",
  },
  {
    id: "python",
    shortCode: "PY",
    name: "Python",
    role: "Data & Scripting",
    codeColor: "text-amber-500",
    description: "Scripting otomasi server, audit log analyzer, dan integrasi data pipeline.",
    productionUsage: "Scheduled cron jobs, server resource telemetry scrapers, dan custom DevOps automation.",
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "aws",
    badgeCode: "AWS",
    badgeBg: "bg-amber-500/10",
    badgeTextColor: "text-amber-600",
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services • Cloud Infrastructure",
  },
  {
    id: "rhcsa",
    badgeCode: "RH",
    badgeBg: "bg-red-500/10",
    badgeTextColor: "text-red-600",
    name: "Red Hat Certified SysAdmin (RHCSA)",
    issuer: "Red Hat Enterprise Linux • Core Systems",
  },
  {
    id: "terraform",
    badgeCode: "TF",
    badgeBg: "bg-purple-500/10",
    badgeTextColor: "text-purple-600",
    name: "HashiCorp Certified: Terraform Assoc.",
    issuer: "Infrastructure as Code (IaC)",
  },
  {
    id: "cka",
    badgeCode: "K8S",
    badgeBg: "bg-blue-500/10",
    badgeTextColor: "text-blue-600",
    name: "CKA: Certified Kubernetes Admin",
    issuer: "Cloud Native Computing Foundation (CNCF)",
  },
];

export const LARAVEL_DOCKER_CODE = {
  dockerCompose: `version: '3.8'

services:
  # Laravel 11 Application & PHP 8.3 FPM
  app:
    build:
      context: .
      dockerfile: Dockerfile
      target: production
    image: muhilman/laravel11-app:latest
    container_name: laravel11_app
    restart: unless-stopped
    working_dir: /var/www/html
    volumes:
      - ./:/var/www/html
      - ./storage:/var/www/html/storage
    environment:
      APP_ENV: production
      APP_DEBUG: 'false'
      DB_CONNECTION: pgsql
      DB_HOST: postgres
      DB_PORT: 5432
      DB_DATABASE: laravel_prod
      DB_USERNAME: hilman_admin
      DB_PASSWORD: \${DB_PASSWORD:-secure_master_password}
      REDIS_HOST: redis
      REDIS_PORT: 6379
      CACHE_STORE: redis
      QUEUE_CONNECTION: redis
      SESSION_DRIVER: redis
    networks:
      - app_network
    depends_on:
      - postgres
      - redis

  # Nginx Reverse Proxy & HTTP Server
  nginx:
    image: nginx:1.26-alpine
    container_name: laravel11_nginx
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./:/var/www/html
      - ./docker/nginx/conf.d:/etc/nginx/conf.d
      - ./docker/nginx/ssl:/etc/nginx/ssl
    networks:
      - app_network
    depends_on:
      - app

  # PostgreSQL 16 Enterprise Relational Database
  postgres:
    image: postgres:16-alpine
    container_name: laravel11_postgres
    restart: unless-stopped
    environment:
      POSTGRES_DB: laravel_prod
      POSTGRES_USER: hilman_admin
      POSTGRES_PASSWORD: \${DB_PASSWORD:-secure_master_password}
    volumes:
      - pgdata:/var/lib/postgresql/data
    networks:
      - app_network

  # Redis In-Memory Cache & Queue Broker
  redis:
    image: redis:7-alpine
    container_name: laravel11_redis
    restart: unless-stopped
    command: ["redis-server", "--appendonly", "yes", "--requirepass", "\${REDIS_PASSWORD:-redis_secure_pass}"]
    volumes:
      - redisdata:/data
    networks:
      - app_network

  # Asynchronous Background Queue Worker (Horizon / Artisan Queue)
  worker:
    build:
      context: .
      dockerfile: Dockerfile
      target: production
    container_name: laravel11_worker
    restart: unless-stopped
    working_dir: /var/www/html
    command: ["php", "artisan", "queue:work", "--tries=3", "--timeout=90"]
    volumes:
      - ./:/var/www/html
    networks:
      - app_network
    depends_on:
      - app
      - redis

networks:
  app_network:
    driver: bridge

volumes:
  pgdata:
  redisdata:
`,

  dockerfile: `# Multi-stage High-Performance Dockerfile for Laravel 11 (PHP 8.3)
FROM php:8.3-fpm-alpine AS base

# Install system dependencies
RUN apk add --no-cache \\
    git \\
    curl \\
    libpng-dev \\
    libxml2-dev \\
    zip \\
    unzip \\
    libpq-dev \\
    icu-dev \\
    linux-headers \\
    supervisor

# Install optimized PHP extensions
RUN docker-php-ext-install pdo pdo_pgsql pgsql intl opcache bcmath pcntl

# Install PECL Redis extension
RUN apk add --no-cache --virtual .build-deps $PHPIZE_DEPS \\
    && pecl install redis \\
    && docker-php-ext-enable redis \\
    && apk del .build-deps

# Install Composer
COPY --from=composer:2.7 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# Production Stage
FROM base AS production

# Copy OPcache configuration for microsecond execution
COPY ./docker/php/opcache.ini /usr/local/etc/php/conf.d/opcache.ini

# Copy project source
COPY . /var/www/html

# Run production composer install
RUN composer install --no-dev --optimize-autoloader --no-interaction

# Permissions for storage & bootstrap cache
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache \\
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

USER www-data

EXPOSE 9000
CMD ["php-fpm"]
`,

  nginxConf: `server {
    listen 80;
    listen [::]:80;
    server_name muhilman.com www.muhilman.com;
    root /var/www/html/public;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";
    add_header X-XSS-Protection "1; mode=block";

    index index.php index.html;
    charset utf-8;

    # Rate limiting buffer
    limit_req_zone $binary_remote_addr zone=one:10m rate=15r/s;

    location / {
        limit_req zone=one burst=20 nodelay;
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;

    location ~ \\.php$ {
        fastcgi_pass app:9000;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
        fastcgi_hide_header X-Powered-By;
        fastcgi_read_timeout 60;
    }

    location ~ /\\.(?!well-known).* {
        deny all;
    }
}
`,
};
