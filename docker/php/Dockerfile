FROM composer:1.7 as composer

FROM php:7.2-fpm-alpine

ENV COMPOSER_ALLOW_SUPERUSER=1
ENV APCU_VERSION 5.1.8

# Add Composer to PHP container
COPY --from=composer /usr/bin/composer /usr/local/bin/composer

RUN apk add --no-cache \
    ca-certificates \
    icu-libs \
    git \
    unzip \
    zlib-dev && \
    apk add --no-cache --virtual .build-deps \
    $PHPIZE_DEPS \
    icu-dev && \
    docker-php-ext-install \
    intl \
    zip && \
    pecl install apcu-${APCU_VERSION} && \
    docker-php-ext-enable apcu && \
    docker-php-ext-enable opcache

ADD php.ini /usr/local/etc/php/php.ini
