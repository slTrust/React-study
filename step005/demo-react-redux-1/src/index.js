import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore} from 'redux';
const stateChanger = (state,action)=>{
  if (state === undefined){
    return 0;
  }else{
    if(action.type === 'add'){
      var newState =state + action.payload;
      return newState;
    }else{
      return state;
    }
  }
  return newState;
}
const store = createStore(stateChanger)

ReactDOM.render(<App value={store.getState()}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
