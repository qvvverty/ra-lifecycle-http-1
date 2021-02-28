import { Component } from 'react';
import { nanoid } from 'nanoid';
import Clock from './Clock/Clock';
import ClockForm from './ClockForm';

export default class WorldTime extends Component {
  state = {
    clocks: [{ city: 'Москва', hourShift: 0, id: nanoid(5) }]
  };

  addClock(newClock) {
    newClock.id = nanoid(5);
    this.setState({ clocks: [...this.state.clocks, newClock] });
  }

  deleteClock(clockId) {
    const newState = {...this.state};
    const foundIndex = newState.clocks.findIndex(clock => clock.id === clockId);
    newState.clocks.splice(foundIndex, 1);
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <ClockForm addClock={this.addClock.bind(this)} />
        <div className="clock-widget-wrapper">
          {this.state.clocks.map(clock => <Clock {...clock} deleteClock={this.deleteClock.bind(this)} key={clock.id} />)}
        </div>
      </div>
    )
  }
}
