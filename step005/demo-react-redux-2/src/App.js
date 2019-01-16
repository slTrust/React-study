import React, { Component } from 'react';

import { connect } from 'react-redux'
class App extends Component {
  render() {
    console.log(this.props);
    return (
        <div className="App">
          <div>
            你点击了<span id="value">{this.props.n}</span>次
            <div>
                <button id="add1" onClick={()=>this.props.add1()}>+1</button>
                <button id="add2">+2</button>
                <button id="add1IfOdd">如果单数就+1</button>
                <button id="addAfter2Ses">2秒后+1</button>
            </div>
          </div>
        </div>
    );
  }
}

/*
 这个 x 就是 把 store里的东西拿出来 放到 this.props上
 所以如果 store = {n:0}传递到这里
 就变成了 this.props.n = 0
 function x(state){
  return{
    n:state.n
  }
}
*/
// 映射 state===>props
/*
// mapStateToProps 必须是一个函数
接受一个参数 state 还有一个不常用的参数
*/
function mapStateToProps(state){
  return{
    n:state.n
  }
}

// 如何 add 呢？ 产生一个action 通过这个connect你就不用 store.dispatch
// 把dispatch映射到 Props
/*
mapDispatchToProps
可以是个函数也可以是个对象
function mapDispatchToProps(dispatch){
  return {
    add1:()=>dispatch({type:'add',payload:1})
  }
}
*/

const mapDispatchToProps = {
  add1:()=>{
    return {type:'add',payload:1}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
