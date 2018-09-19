Implementation of a GraphQL server with file upload using [Symfony](https://symfony.com/) with [OverblogGraphQLBundle](https://github.com/overblog/GraphQLBundle) and a front app consuming this API.

Blog article: [http://blog.michaelperrin.fr/2018/09/19/implementation-of-agraphql-mutation-with-file-upload/](http://blog.michaelperrin.fr/2018/09/19/implementation-of-agraphql-mutation-with-file-upload/).

## Install project

Run:

    docker-compose up -d --build
    docker-compose exec php composer install

## Run project

Run:

    docker-compose up -d --build
    cd front
    yarn start
