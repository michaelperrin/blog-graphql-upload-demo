import React from 'react';
import UpdateProfilePictureForm from './UpdateProfilePictureForm';
import APOLLO_CLIENT from './constants/apolloClient';
import { ApolloProvider } from 'react-apollo';

const App = () => (
  <ApolloProvider client={APOLLO_CLIENT}>
    <div className="App">
      <UpdateProfilePictureForm />
    </div>
  </ApolloProvider>
);

export default App;
