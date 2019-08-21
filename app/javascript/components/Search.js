import React, { Component } from 'react'
import CurrenciesList from './CurrenciesList'

class Search extends Component {
  render() {
    return(
      <div>
        <h1>Cryptocurrency Portfolio Calculator</h1>
        <form onSubmit={ (e) => e.preventDefault() }>
          <div className='form-group'>
            <label>Search for a currency:</label><br/>
            <input autoComplete='off' type='text' name='search' placeholder='Ex: Bitcoin, Litecoin, Ethereum...' value={this.props.name} onChange={this.props.handleChange} className='' />
          </div>
          <div className='currencies-list'>
            <CurrenciesList searchResults={this.props.searchResults} handleSelect={this.props.handleSelect} />
          </div>
        </form>
      </div>
    )
  }
}

export default Search