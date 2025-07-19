import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import client from './src/services/apolloClient';
import { store } from './src/store';
import RootNavigator from './src/navigation/RootNavigator';

// App entry point. Wraps the app in ApolloProvider, Redux Provider, and NavigationContainer.
const App: React.FC = () => (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ApolloProvider>
  </Provider>
);

export default App; 