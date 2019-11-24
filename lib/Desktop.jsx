import { styled } from 'uebersicht'
import styles from './styles.jsx'

const DesktopContainer = styled.div`
  display: flex;
`

const Desktop = styled.div`
  color: ${props => (props.active ? styles.colors.fg : styles.colors.dim)};
  width: 2.2em;
  & + div {
    margin-left: 1rem;
  }
`

const iconMap = [' ', '', '', '', ' ']

const renderSpace = (index, active) => {
  const icon = iconMap[index - 1] ? iconMap[index - 1] : ''
  return (
    <Desktop active={index == active} key={index}>
      {index + ':' + icon}
    </Desktop>
  )
}

const render = ({ output }) => {
  if (!output) return null

  const { spaces, app, type } = output

  return (
    <DesktopContainer>
      {spaces.reduce((acc, space) => {
        acc.push(renderSpace(space.index, output.active, space.windows))
        return acc
      }, [])}
    </DesktopContainer>
  )
}

export default render
