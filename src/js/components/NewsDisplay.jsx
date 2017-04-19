const {PropTypes, Component} = React;

class NewsDisplay extends Component {

  state = {hover: false}

  handleMouseEnter = () => {
    this.setState({hover: true});
  }

  handleMouseLeave = () => {
    this.setState({hover: false});
  }

  render() {

    const {x, y, size, news} = this.props;
    const {hover} = this.state;

    const s = size * 2.3;

    const base = {
      position: `absolute`,
      background: `#515a5b`,
      font: `normal ${size}px sans-serif`,
      textAlign: `center`,
      cursor: `pointer`,
      zIndex: 1000
    };

    const style = {
      ...base,
      width: `${s*20}px`,
      height: `${s*news.length}px`,
      left: `${x}px`,
      top: `${y}px`,
      borderRadius: `${s / 4}px`,
      lineHeight: `${s}px`,
      background: hover ? `#ff0` : base.background
    };

    return (
      <div
        style={style}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {/*hover ? `*${text}*` : `<${text}>` */}
        {news.map((newsItem,i) => <div key={i}>{newsItem}</div>)}
      </div>
    );

  }
}

NewsDisplay.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  news: PropTypes.arrayOf(PropTypes.string),
  size: PropTypes.number
};

export default NewsDisplay;
