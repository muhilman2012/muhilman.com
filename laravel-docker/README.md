# Stack Laravel 11 + Docker (Production Ready)
Oleh: **Muhammad Hilman** (muhilman.com)

Arsitektur containerized modern untuk aplikasi Laravel 11 dengan performa tinggi, keandalan server 99.9%, dan waktu respon sub-100ms.

## Komponen Stack
1. **PHP 8.3 FPM** (Alpine Linux, OPcache tuning, PECL Redis, PostgreSQL/MySQL extensions)
2. **Nginx 1.26** (Reverse proxy, FastCGI buffer tuning, HTTP/2, security headers)
3. **PostgreSQL 16** (Database relasional enterprise dengan persistent volume)
4. **Redis 7** (In-memory caching, session storage, dan Laravel Horizon/Queue broker)
5. **Laravel Queue Worker** (Asynchronous background job worker otomatis)

## Panduan Menjalankan

```bash
# 1. Masuk ke direktori
cd laravel-docker

# 2. Buat file environment
cp .env.example .env

# 3. Jalankan container
docker compose up -d --build

# 4. Inisialisasi Laravel
docker compose exec app php artisan key:generate
docker compose exec app php artisan migrate --seed

# 5. Caching untuk Production
docker compose exec app php artisan optimize
```

Aplikasi dapat langsung diakses di `http://localhost`.
