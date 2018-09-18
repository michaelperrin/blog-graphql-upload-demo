import React, { Component } from 'react';
import UpdateProfilePictureForm from './UpdateProfilePictureForm';
import APOLLO_CLIENT from './constants/apolloClient';
import { ApolloProvider } from 'react-apollo';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={APOLLO_CLIENT}>
        <div className="App">
          <UpdateProfilePictureForm />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
