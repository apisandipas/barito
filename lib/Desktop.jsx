import { styled } from 'uebersicht';
import styles from './styles.jsx';

const DesktopContainer = styled.div`
  display: flex;
`;

const Desktop = styled.div`
  box-sizing: border-box;
  color: ${props => (props.active ? styles.colors.fgActive : styles.colors.fg)};
  background-color: ${props =>
    props.active ? styles.colors.bgActive : styles.colors.bg};

  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const iconMap = [' ', '', '', '', ' '];

const renderSpace = (index, active) => {
  const icon = iconMap[index - 1] ? iconMap[index - 1] : index;
  return (
    <Desktop active={index == active} key={index}>
      {icon}
    </Desktop>
  );
};

const render = ({ output }) => {
  if (!output) return null;

  const { spaces, app, type } = output;

  return (
    <DesktopContainer>
      {spaces.reduce((acc, space) => {
        acc.push(renderSpace(space.index, output.active, space.windows));
        return acc;
      }, [])}
    </DesktopContainer>
  );
};

export default render;
