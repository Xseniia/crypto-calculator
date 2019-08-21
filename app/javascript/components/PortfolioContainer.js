import React, { Component } from 'react'
import Search from './Search'
import Calculate from './Calculate'
import axios from 'axios'
import Portfolio from './Portfolio'

class PortfolioContainer extends Component {
  state = {
    portfolio: [],
    search_results: [],
    active_currency: null,
    amount: '',
    portfolio: []
  }

  handleChange = (e) => {
    axios.post('http://localhost:3000/search', {
      search: e.target.value
    }).then((data) => {
      this.setState({
        search_results: [...data.data.currencies]
      })
    }).catch((error) => {

    })
  }

  handleSelect = (e) => {
    e.preventDefault()

    const id = e.target.getAttribute('data-id')
    const activeCurrency = this.state.search_results.filter(result => result.id === parseInt(id))[0]
    this.setState({
      active_currency: activeCurrency,
      search_results: []
    })
  }

  handleAmount = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { active_currency, amount } = this.state

    axios.post('http://localhost:3000/calculate', {
      id: active_currency.id,
      amount: amount
    }).then((data) => {
      this.setState({
        amount: '',
        active_currency: null,
        portfolio: [...this.state.portfolio, data.data]
      })
    }).catch((error) => {
      debugger
    })
  }

  render() {
    const searchOrCalculate = this.state.active_currency? 
      <Calculate 
        handleChange={this.handleAmount} 
        handleSubmit={this.handleSubmit}
        activeCurrency={this.state.active_currency} /> : 
      <Search 
        handleChange={this.handleChange} 
        handleSelect={this.handleSelect} 
        searchResults={this.state.search_results} />

    return(
      <div className='grid'>
        <div className='left'>
          {searchOrCalculate} 
        </div>
        <div className='right'>
          <Portfolio portfolio={this.state.portfolio} />   
        </div>  
      </div>
    )
  }
}

export default PortfolioContainer