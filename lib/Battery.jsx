import styles from './styles.jsx'

const getChargingLevelIcon = percentage => {
  switch (true) {
    case percentage <= 25:
      return ' '
    case percentage <= 50:
      return ' '
    case percentage <= 75:
      return ' '
    case percentage <= 100:
      return ' '
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
        <span>{charging ? ' ' : getChargingLevelIcon(percentage)}</span>&nbsp;
        <span>{percentage}%</span>
      </div>
    </div>
  )
}

export default render
