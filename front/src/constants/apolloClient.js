import { ApolloClient } from 'apollo-boost';
import { createUploadLink } from 'apollo-upload-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

const APOLLO_CLIENT = new ApolloClient({
    cache: new InMemoryCache(),
    link: createUploadLink({
        uri: 'http://localhost:8080', // Use env var instead
    }),
});

export default APOLLO_CLIENT;
