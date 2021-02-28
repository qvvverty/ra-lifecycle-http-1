import { Component } from 'react';

export default class Clock extends Component {
  state = {
    hour: -90,
    minute: -90,
    second: -90
  }

  setClockHands() {
    const now = new Date();
    const hours = now.getHours() > 12 ? now.getHours() - 12 : now.getHours();
    const newState = {
      hour: -90 + (hours + this.props.hourShift) * 30 + 0.5 * now.getMinutes(),
      minute: -90 + now.getMinutes() * 6 + 0.1 * now.getSeconds(),
      second: -90 + now.getSeconds() * 6
    }

    this.setState(newState);
  }

  clockDeleteHandler(id) {
    this.props.deleteClock(this.props.id);
  }

  componentDidMount() {
    this.setClockHands();
    this.interval = setInterval(this.setClockHands.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="clock-container">
        <div className="clock-delete" onClick={this.clockDeleteHandler.bind(this)}>✗</div>
        <div className="clock-name">{this.props.city}</div>
        <div className="clock">
          <div className="hour-hand" style={{ transform: `rotate(${this.state.hour}deg)` }}>
            <div className="hour-hand-invisible" />
            <div className="hour-hand-visible" />
          </div>
          <div className="minute-hand" style={{ transform: `rotate(${this.state.minute}deg)` }}>
            <div className="minute-hand-invisible" />
            <div className="minute-hand-visible" />
          </div>
          <div className="second-hand" style={{ transform: `rotate(${this.state.second}deg)` }}>
            <div className="second-hand-invisible" />
            <div className="second-hand-visible" />
          </div>
        </div>
      </div>
    )
  }
}
