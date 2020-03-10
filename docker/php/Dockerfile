FROM composer:1.9 as composer

FROM php:7.4-fpm-alpine

ENV COMPOSER_ALLOW_SUPERUSER=1
ENV APCU_VERSION 5.1.18

# Add Composer to PHP container
COPY --from=composer /usr/bin/composer /usr/local/bin/composer

RUN apk add --no-cache \
    ca-certificates \
    icu-libs \
    git \
    unzip \
    libzip && \
    apk add --no-cache --virtual .build-deps \
    $PHPIZE_DEPS \
    icu-dev

RUN apk add --no-cache libzip-dev
RUN docker-php-ext-install \
    intl \
    zip

RUN pecl install apcu-${APCU_VERSION} && \
    docker-php-ext-enable apcu && \
    docker-php-ext-enable opcache

ADD php.ini /usr/local/etc/php/php.ini
