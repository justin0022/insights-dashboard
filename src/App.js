import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import theme from './theme'
import Routes from './Routes'

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL
})

function App () {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router basename='/' >
          <Routes />
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App