import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import './index.css';
import App from './components/App';
import movies from './reducers';
import rootReducer from './reducers';


const logger = function({dispatch, getState}) {
  return function (next) {
    return function (action) {
      console.log('ACTION_TYPE = ', action.type);
      next(action); 
    }
  }
}

// const logger = ({dispatch, getState}) => (next) => (action) {
//   console.log('ACTION_TYPE = ', action.type);
//       next(action); 
// }



const store =   createStore(rootReducer, applyMiddleware(logger));
console.log('store',store);
// console.log('BEFORE STATE',store.getState());

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'superman'}]
// });

// console.log('AFTER STATE',store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);    