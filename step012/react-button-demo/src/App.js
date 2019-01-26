import React, { Component } from 'react';
import './App.css';
import Button from './components/button'
/*
import BoxOne from './BoxOne'

class App extends Component {
  render() {
    return (
      <div className="App">
        <button className="btn">Hello</button>
        <button className="btn">Hello</button>
        <BoxOne firstLine="hello" />
        <BoxOne/>
      </div>
    );
  }
}
*/
class App2 extends Component {
  render() {
    return (
      <div className="App">
        <Button value="按钮" onClick={ this.z.bind(this) }/>
        <Button value="按钮"/>
        <Button value="按钮"/>
      </div>
    );
  }
  z(x){
    console.log('外面的函数');
    console.log(x);
  }
}

export default App2;
