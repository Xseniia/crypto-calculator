import React, { Component } from 'react'

class PortfolioItem extends Component {
  render() {
    const { item, index } = this.props
    return(
      <li className='row' key={index}>
        <div className='col'>
          <div className='header'>Currency:</div>
          <div className='text'>{item.currency.name}</div>
        </div>
        <div className='col'>
          <div className='header'>Current price:</div>
          <div className='text'>{item.current_price}</div>
        </div>
        <div className='col'>
          <div className='header'>Amount in your portfolio:</div>
          <div className='text'>{item.amount}</div>
        </div>
        <div className='col'>
          <div className='header'>Value:</div>
          <div className='text'>{item.value}</div>
        </div>
      </li>
    )
  }
}

export default PortfolioItem