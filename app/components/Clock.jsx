let React = require('react');

let Clock = React.createClass({
  getDefaultProps: function () {
    return {
      totalSeconds: 0
    };
  },
  propTypes: {
    totalSeconds: React.PropTypes.number
  },
  formatSeconds: (totalSeconds) => {
    let seconds = totalSeconds % 60;
    let minutes = Math.floor(totalSeconds / 60);

    // Add zero before single digit values
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return `${minutes}:${seconds}`;
  },
  render: function () {
    let {totalSeconds} = this.props;

    return (
      <div className='clock'>
        <span className='clock-text'>{this.formatSeconds(totalSeconds)}</span>
      </div>
    );
  }
});

module.exports = Clock;
