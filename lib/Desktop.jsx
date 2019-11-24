import styles from './styles.jsx'

const containerStyle = {
  display: 'grid',
  gridAutoFlow: 'column',
  gridGap: '12px'
}

const desktopStyle = {
  width: '2ch'
}

const iconMap = ['', '', '']

const renderSpace = (index, active, windows) => {
  let contentStyle = JSON.parse(JSON.stringify(desktopStyle))
  let hasWindows = windows > 0
  if (index == active) {
    contentStyle.color = styles.colors.fg
  }
  return <div style={contentStyle}>{iconMap[index - 1] || index}</div>
}

const render = ({ output }) => {
  if (!output) return null

  const { spaces, app, type } = output

  return (
    <div style={containerStyle}>
      {spaces.reduce((acc, space) => {
        acc.push(renderSpace(space.index, output.active, space.windows))
        return acc
      }, [])}
    </div>
  )
}

export default render
