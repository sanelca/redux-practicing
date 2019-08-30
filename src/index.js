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

//Handle an Action in the Store
const defaultState = {
  login: false
};

const reducer2 = (state = defaultState, action) => {
  // change code below this line
  if (action.type === 'LOGIN') {
    return  {
    login: true
    }
    } else {
      return defaultState
  };
  // change code above this line
};

const store4 = createStore(reducer2);

const loginAction2 = () => {
  return {
    type: 'LOGIN'
  }
};

//Use a Switch Statement to Handle Multiple Actions
const defaultState2 = {
  authenticated: false
};

const authReducer = (state = defaultState2, action) => {
  // change code below this line
  switch (action.type) {
    case 'LOGIN':
      return {authenticated: true};
      break;
    case 'LOGOUT':
      return {authenticated: false};
      break;
    default:
      return defaultState2;
  }
  // change code above this line
};

const store5 = createStore(authReducer);

const loginUser3 = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser3 = () => {
  return {
    type: 'LOGOUT'
  }
};
