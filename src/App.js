import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }

    this.incrementCounter = this.incrementCounter.bind(this);
  }

  componentDidMount() {
    document.title = this.state.counter;
  }

  componentDidUpdate() {
    document.title = this.state.counter;
  }

  incrementCounter() {
    const { counter } = this.state;
    this.setState({
      counter: counter + 1
    });
  }

  render() {
    return (
      <>
        <button
          onClick={this.incrementCounter}
        >
         Increment counter
        </button>
        <h1>{this.state.counter}</h1>
      </>
    )
  }
}
