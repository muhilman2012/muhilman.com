# Production Ready Dockerfile for Laravel 11 (PHP 8.3)
FROM php:8.3-fpm-alpine

# Install core build dependencies & PHP system libs
RUN apk add --no-cache \
    git \
    curl \
    libpng-dev \
    libxml2-dev \
    zip \
    unzip \
    libpq-dev \
    icu-dev \
    linux-headers \
    supervisor

# Install optimized PHP extensions for Laravel
RUN docker-php-ext-install pdo pdo_pgsql pgsql intl opcache bcmath pcntl

# Install PECL Redis
RUN apk add --no-cache --virtual .build-deps $PHPIZE_DEPS \
    && pecl install redis \
    && docker-php-ext-enable redis \
    && apk del .build-deps

# Copy Composer binary
COPY --from=composer:2.7 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# Copy app code
COPY . /var/www/html

# Permissions
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache \
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache 2>/dev/null || true

USER www-data

EXPOSE 9000
CMD ["php-fpm"]
