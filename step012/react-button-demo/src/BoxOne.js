import React, { Component } from 'react';
import './BoxOne.css';

class BoxOne extends Component {
  render() {
    console.log(this.props.firstLine)
    return (
        <div className="BoxOne">
            <div> {this.props.firstLine || 'Box 1'} </div>
        </div>
    );
  }
}

export default BoxOne;
