const {PropTypes, Component} = React;

class Dot extends Component {

  state = {hover: false}

  handleMouseEnter = () => {
    this.setState({hover: true});
  }

  handleMouseLeave = () => {
    this.setState({hover: false});
  }

  render() {

    const {x, y, size, text} = this.props;
    const s = size * 1.3;

    const base = {
      position: `absolute`,
      background: `#61dafb`,
      font: `normal 15px sans-serif`,
      textAlign: `center`,
      cursor: `pointer`,
    };

    const style = {
      ...base,
      width: `${s}px`,
      height: `${s}px`,
      left: `${x}px`,
      top: `${y}px`,
      borderRadius: `${(s / 2)}px`,
      lineHeight: `${s}px`,
      background: this.state.hover ? `#ff0` : base.background
    };

    return (
      <div style={style} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        {this.state.hover ? `*${text}*` : text}
      </div>
    );

  }
}

Dot.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  text: PropTypes.string,
  size: PropTypes.string
};

export default Dot;
