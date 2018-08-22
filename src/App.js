import React, { Component } from 'react'
import './App.css'
import Home from './components/containers/Home'
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Navbar-div">
          <Home />
        </div>
      </div>
    )
  }
}

export default App
