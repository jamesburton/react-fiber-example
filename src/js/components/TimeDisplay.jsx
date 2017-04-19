const {PropTypes, Component} = React;

class TimeDisplay extends Component {

  state = {hover: false}

  handleMouseEnter = () => {
    this.setState({hover: true});
  }

  handleMouseLeave = () => {
    this.setState({hover: false});
  }

  render() {

    const {x, y, size, seconds} = this.props;
    const {hover} = this.state;

    const text = `${seconds}s`;

    const s = size * 1.3;

    const base = {
      position: `absolute`,
      background: `#915abb`,
      font: `normal 18px sans-serif`,
      textAlign: `center`,
      cursor: `pointer`,
    };

    const style = {
      ...base,
      width: `${s*4}px`,
      height: `${s}px`,
      left: `${x}px`,
      top: `${y}px`,
      borderRadius: `${s / 4}px`,
      lineHeight: `${s}px`,
      background: hover ? `#f0f` : base.background
    };

    return (
      <div
        style={style}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {hover ? `*${text}*` : `<${text}>` }
      </div>
    );

  }
}

TimeDisplay.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  text: PropTypes.string,
  seconds: PropTypes.number,
  size: PropTypes.number
};

export default TimeDisplay;
