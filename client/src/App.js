import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Nav from './components/Nav/index'
import Home from './pages/home'
import Login from "./pages/login";
import Signup from "./pages/signup";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})

function App() {
  return (
      <ApolloProvider client={client}>
    <ChakraProvider theme={theme}>
     <Router>
       <Nav />
       <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
       </Switch>
     </Router>
    </ChakraProvider>
     </ApolloProvider>
  );
}

export default App;
