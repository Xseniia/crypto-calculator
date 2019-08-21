import React, { Component } from 'react'

class Calculate extends Component {
  render() {
    return(
      <div>
        <h1>How much {this.props.activeCurrency.name} do you own?</h1>
        <form onSubmit={this.props.handleSubmit}>
          <div className='form-group'>
            <label>Enter amount own:</label><br/>
            <input autoComplete='off' type='text' name='amount' placeholder='Ex: 1, 3...' value={this.props.amount} onChange={this.props.handleChange} className='' />
          </div>
          <div>
            <input type='submit' className='calculate-btn' value='Calculate my total' />
          </div>
        </form>
      </div>
    )
  }
}

export default Calculate