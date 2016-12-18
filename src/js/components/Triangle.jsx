import Dot from './Dot';

const {PropTypes} = React;

const Triangle = ({x, y, s, children}) => {

  const targetSize = 25;

  if (s <= targetSize) {
    return (
      <Dot
        x={x - (targetSize / 2)}
        y={y - (targetSize / 2)}
        size={targetSize}
        text={children}
      />
    );
  }

  const slowDown = false;

  if (slowDown) {
    const e = performance.now() + 0.8;
    while (performance.now() < e) {
      // Artificially long execution time.
    }
  }

  s /= 2;

  return [

    <Triangle x={x} y={y - (s / 2)} s={s}>
      {children}
    </Triangle>,

    <Triangle x={x - s} y={y + (s / 2)} s={s}>
      {children}
    </Triangle>,

    <Triangle x={x + s} y={y + (s / 2)} s={s}>
      {children}
    </Triangle>,

  ];

};

Triangle.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  s: PropTypes.number,
  children: PropTypes.node
};

Triangle.shouldComponentUpdate = (oldProps, newProps) => {

  const o = oldProps;
  const n = newProps;

  return !(
    o.x === n.x &&
    o.y === n.y &&
    o.s === n.s &&
    o.children === n.children
  );

};

export default Triangle;
