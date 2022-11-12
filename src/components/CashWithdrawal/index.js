// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  deductAmount = value => {
    this.setState(prevState => ({
      balance: prevState.balance - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <div className="name-container">
            <p className="logo">S</p>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="bal-desc">Your Balance</p>
            <p className="balance">{balance}</p>
          </div>
          <p className="rupees">In Rupees</p>
          <div className="withdraw-section">
            <p className="heading">Withdraw</p>
            <p className="choose-denom">CHOOSE SUM (IN RUPEES)</p>
            {/* Denomination Items goes here */}
            <ul className="list-container">
              {denominationsList.map(each => (
                <DenominationItem
                  denominations={each}
                  key={each.id}
                  deductAmount={this.deductAmount}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
