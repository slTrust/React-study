import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          你点击了<span id="value">{this.props.value}</span>次
          <div>
              <button id="add1">+1</button>
              <button id="add2">+2</button>
              <button id="add1IfOdd">如果单数就+1</button>
              <button id="addAfter2Ses">2秒后+1</button>
          </div>
      </div>
      </div>
    );
  }
}

export default App;
