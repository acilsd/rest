import React, { Component } from 'react';
import normalize from '../../node_modules/node-normalize-scss/_normalize.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      workers: []
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const lng = '';
    const lat = '';
    fetch(`/api/workers?lng=${lng}&lat=${lat}`)
      .then(data => data.json())
      .then(json => this.setState({ workers: json }));
  }

  render() {
    const { workers } = this.state;

    return (
      <div>
        Hello world
        <div ref={c => this.placeholder = c}></div>
      </div>
    );
  }
}
