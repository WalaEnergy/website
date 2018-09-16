import React, { Component } from 'react'
import { Router } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import StaticRoutes from 'react-static-routes'

// Import boostrap first
import 'bootstrap/dist/css/bootstrap.css';
import './app.css'

class App extends Component {
  render() {
    return (
      <div>
          <Router>
            <StaticRoutes />
          </Router>
        </div>
      ) 
  }
}

export default hot(module)(App)