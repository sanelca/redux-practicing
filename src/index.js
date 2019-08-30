import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { createStore } from 'redux';

const reducer = (state = 5) => {
  return state;
}

const store = createStore(reducer);


//Get State from the Redux Store

const store2 = createStore(
  (state = 5) => state
);
let currentState = store2.getState();

console.log(currentState)

//Define a Redux Action
let action={
  type: 'LOGIN'
}

//Define an Action Creator
function actionCreator(){
    return action;
}

//Dispatch an Action Event
const store3 = createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

store3.dispatch(loginAction());
