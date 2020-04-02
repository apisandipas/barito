import Desktop from './Desktop.jsx';
import Error from './Error.jsx';
import parse from './parse.jsx';
import styles from './styles.jsx';
import widget from '../widget.json';

const style = {
  display: 'grid',
  gridAutoFlow: 'column',
  gridGap: '16px',
  position: 'fixed',
  overflow: 'hidden',
  left: '1.375rem',
  bottom: '1em',
  fontFamily: styles.fontFamily,
  lineHeight: styles.lineHeight,
  fontWeight: styles.fontWeight,
  fontSize: styles.fontSize,
  color: styles.colors.dim,
  padding: '0.25rem 0'
};

const Spaces = ({ output }) => {
  const data = parse(output);

  if (typeof data === 'undefined') {
    return (
      <div style={style}>
        <Error msg='Error: unknown script output' side='left' />
      </div>
    );
  }
  if (typeof data.error !== 'undefined') {
    return (
      <div style={style}>
        <Error msg={`Error: ${data.error}`} side='left' />
      </div>
    );
  }
  return (
    <div style={style}>
      <Desktop output={data.desktop} />
    </div>
  );
};

export default Spaces;
