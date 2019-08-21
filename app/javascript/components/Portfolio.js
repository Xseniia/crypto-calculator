import React, { Component } from 'react'
import PortfolioItem from './PortfolioItem'

class Portfolio extends Component {
  render() {
    const portfilioItems = this.props.portfolio.map((item, index) => <PortfolioItem item={item} index={index} />)
    const total = this.props.portfolio.reduce((total, curr) => total + curr.value, 0)

    return(
      <div>
        <div className='portfolio-value'>
          <div className='portfolio-value--header'>Your total portfolio value is: </div>
          <div className='portfolio-value--content'>{total.toFixed(4)}</div>
        </div>
        <ul>
          {portfilioItems}
        </ul>
      </div>
    )
  }
}

export default Portfolio