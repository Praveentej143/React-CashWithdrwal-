// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denominations, deductAmount} = props
  const {id, value} = denominations

  const onDecrement = () => {
    deductAmount(value)
  }

  return (
    <li className="denom-item-container">
      <div>
        <button className="denom-btn" type="button" onClick={onDecrement}>
          {value}
        </button>
      </div>
    </li>
  )
}
export default DenominationItem
