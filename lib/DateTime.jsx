import { styled } from 'uebersicht';
import styles from './styles.jsx';

const DateTime = styled.div`
  background: #8497a9;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  color: ${styles.colors.bg};
`;

const render = ({ output }) => {
  if (!output) return null;
  const { date, time } = output;

  return (
    <DateTime>
       &nbsp;{date}  {time}
    </DateTime>
  );
};

export default render;
