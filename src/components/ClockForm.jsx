import { Component } from 'react'

export default class ClockForm extends Component {
  defaultState = {
    city: '',
    hourShift: ''
  }

  state = this.defaultState;

  submitHandler(event) {
    event.preventDefault();
    if (this.state.city && !isNaN(this.state.hourShift)) {
      this.props.addClock({ ...this.state, hourShift: +this.state.hourShift });
      this.setState(this.defaultState);
    }
  }

  inputHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const state = this.state;

    return (
      <form onSubmit={this.submitHandler.bind(this)} className="clock-form">
        <div>
          <label className="clock-form-label" htmlFor="name">Город</label>
          <input
            className="clock-form-input"
            type="text"
            id="city"
            name="city"
            onChange={this.inputHandler.bind(this)}
            value={state.city}
          />
        </div>
        <div>
          <label className="clock-form-label" htmlFor="timezone">Временная зона</label>
          <input
            className="clock-form-input"
            type="text"
            id="hourShift"
            name="hourShift"
            onChange={this.inputHandler.bind(this)}
            value={state.hourShift}
          />
        </div>
        <button className="clock-form-button">Добавить</button>
      </form>
    )
  }
}
