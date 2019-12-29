import widget from './widget.json';
import Spaces from './lib/Spaces.jsx';

export const refreshFrequency = 500;

export const command = `./${widget.name}/scripts/spaces.sh 3`;

export const render = ({ output }) => {
  return <Spaces output={output} />;
};

export default null;
