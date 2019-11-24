import styles from './styles.jsx'

const getChargingLevelIcon = percentage => {
  switch (true) {
    case percentage <= 20:
      return ' '
    case percentage <= 40:
      return ' '
    case percentage <= 60:
      return ' '
    case percentage <= 80:
      return ' '
    case percentage <= 100:
      return ' '
  }
}

const render = ({ output }) => {
  const { charging, percentage, remainingTime } = output
  return (
    <div>
      <div
        style={
          percentage <= 20 && charging == false
            ? { color: styles.colors.red }
            : null
        }
      >
        <span>{charging ? ' ' : getChargingLevelIcon(percentage)}</span>
        <span>{percentage}%</span>
      </div>
    </div>
  )
}

export default render
