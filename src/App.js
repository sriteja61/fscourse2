import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() { // Changed from Increment to increment
    this.setState(previousValue => ({
      count: previousValue.count + 1,
    }));
  }

  decrement() { // Changed from Decrement to decrement
    this.setState(previousValue => ({
      count: previousValue.count - 1,
    }));
  }

  render() {
    return (
      <div className="counter">
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}> + </button>
        <button onClick={this.decrement}> - </button>
      </div>
    );
  }
}

export default Counter;
