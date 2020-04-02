import { styled } from 'uebersicht';
import styles from './styles.jsx';

const Battery = styled.div`
  display: flex;
  align-items: center;
  background ${styles.colors.bg};
  color: #8497a9;
  padding: 0 1rem 0;
  span + span {
    display: inline-block;
    margin-left: 0.5rem;
  }
`;

const getChargingLevelIcon = percentage => {
  switch (true) {
    case percentage <= 25:
      return ' ';
    case percentage <= 50:
      return ' ';
    case percentage <= 75:
      return ' ';
    case percentage <= 100:
      return ' ';
  }
};

const render = ({ output }) => {
  const { charging, percentage, remainingTime } = output;
  return (
    <Battery
      style={
        percentage <= 20 && charging == false
          ? { color: styles.colors.red }
          : null
      }
    >
      <span>{charging ? ' ' : getChargingLevelIcon(percentage)}</span>&nbsp;
      <span>{percentage}%</span>
    </Battery>
  );
};

export default render;
