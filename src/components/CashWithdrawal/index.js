// Write your code here
import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    currentBalance: 2000,
  }

  getDenominationValue = value => {
    const {currentBalance} = this.state
    if (currentBalance >= value) {
      this.setState(prevState => ({
        currentBalance: prevState.currentBalance - value,
      }))
    }
  }

  render() {
    const {denominationsList} = this.props
    const {currentBalance} = this.state
    const fullName = 'Sarah Williams'
    return (
      <div className="app-container">
        <div className="container-card">
          <div className="header-container">
            <div className="profile-container">
              <div className="char-container">
                <h1 className="char">S</h1>
              </div>
              <h1 className="profile-name">{fullName}</h1>
            </div>
            <div className="balance-container">
              <h1 className="balance-heading">Your Balance</h1>
              <div className="balance-info">
                <h1 className="balance-number">{currentBalance}</h1>
                <p className="in-rupees">In Rupees</p>
              </div>
            </div>
          </div>
          <div className="withdraw-container">
            <h1 className="withdraw-heading">Withdraw</h1>
            <p className="withdraw-subtext">CHOOSE SUM (IN RUPEES)</p>
            <ul className="denominations-list">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  key={eachItem.id}
                  denominations={eachItem}
                  getDenominationValue={this.getDenominationValue}
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
