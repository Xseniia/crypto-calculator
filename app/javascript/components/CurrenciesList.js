import React, { Component } from 'react'

class CurrenciesList extends Component {
  render() {
    const searchResults = this.props.searchResults
    return(
      <ul>
        { searchResults.map( 
          result => 
          <li key={result.id} data-id={result.id} onClick={this.props.handleSelect} className='currencies-list-item'><a href='#' className='currency'><span>{result.name}</span> <span className='currency_symbol'>{result.currency_symbol}</span></a></li>
          ) }
      </ul>
    )
  }
}

export default CurrenciesList