import React, { Component } from 'react'
import PortfolioContainer from './PortfolioContainer'
import axios from 'axios'

const csrfToker = document.querySelector('[name="csrf-token"]').content
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToker

class App extends Component {
  render() {
    return(
      <PortfolioContainer />
    )
  }
}

export default App