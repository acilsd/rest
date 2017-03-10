import React, { Component } from 'react';
import normalize from '../../node_modules/node-normalize-scss/_normalize.scss';
import styles from './style.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      workers: []
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const lng = this.lng.value;
    const lat = this.lat.value;
    fetch('/api/workers?lng=' + lng + '&lat=' + lat)
      .then(data => data.json())
      .then(json => {
        this.setState({
          workers: json
        });
        //console.log(json);
      });
  }

  render() {
    const { workers } = this.state;

    return (
      <div>
        <form id="search" onSubmit={this.handleSubmit}>
          <label>Enter your Latitude:</label>
          <input type="text" ref={c => this.lat = c} placeholder="latitude" required/>
          <label>Enter your Longitude:</label>
          <input type="text" ref={c => this.lng = c} placeholder="longitude" required/>
          <input type="submit" value="Find Workers" />
        </form>
        <ul>
          {
            workers.map((worker, idx) => {
              return (
                <li key={idx}>
                  <p>{worker.obj.available}</p>
                  <p>{worker.obj.name}</p>
                  <p>{worker.obj.rank}</p>
                  <p>{Math.floor(worker.dis / 1000)} km</p>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}
