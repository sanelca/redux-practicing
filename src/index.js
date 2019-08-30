import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { combineReducers } from 'redux';

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



//Use const for Action Types
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const defaultState4 = {
  authenticated: false
};

const authReducer2 = (state = defaultState4, action) => {

  switch (action.type) {

    case LOGIN:
      return {
        authenticated: true
      }

    case LOGOUT:
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store6 = createStore(authReducer2);

const loginUser4 = () => {
  return {
    type: LOGIN
  }
};

const logoutUser4 = () => {
  return {
    type: LOGOUT
  }
};


//Register a Store Listener
const ADD = 'ADD';

const reducer3 = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store7 = createStore(reducer);

// global count variable:
let count = 0;

// change code below this line
store7.subscribe(() => {count++});
// change code above this line

store7.dispatch({type: ADD});
console.log(count);
store7.dispatch({type: ADD});
console.log(count);
store7.dispatch({type: ADD});
console.log(count);


//Combine Multiple Reducers
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN2 = 'LOGIN';
const LOGOUT2 = 'LOGOUT';

const authReducer4 = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  auth: authReducer4,
  count: counterReducer
});

const store8 = createStore(rootReducer);


//Send Action Data to the Store
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // change code below this line
    case 'ADD_NOTE':
      return action.text;
      break;
    // change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // change code below this line
  return {
    type:'ADD_NOTE',
    text:note
  }
  // change code above this line
};

const store9 = createStore(notesReducer);

console.log(store9.getState());
store9.dispatch(addNoteText('Hello!'));
console.log(store9.getState());
