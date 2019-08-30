import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';


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

//Use Middleware to Handle Asynchronous Actions
const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    // dispatch request action here
    dispatch(requestingData());
    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // dispatch received data action here
    dispatch(receivedData(data));
    }, 2500);
  }
};

const defaultState5 = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState5, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store10 = createStore(
  asyncDataReducer,
  applyMiddleware(logger)
);


//Write a Counter with Redux
const INCREMENT2 = 'INCREMENT'; // define a constant for increment action types
const DECREMENT2 = 'DECREMENT'; // define a constant for decrement action types

const counterReducer2 = (state = 0, action) => {
    if (action.type === INCREMENT2) {
        return (state += 1);
    } else if (action.type === DECREMENT2) {
        return (state -= 1);
    }
    return state;
} // define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = () => {
    return {type: INCREMENT2};
} // define an action creator for incrementing

const decAction = () => {
    return {type: DECREMENT2};
} // define an action creator for decrementing

const store11 = createStore(counterReducer2); // define the Redux store here, passing in your reducers




//Never Mutate State
const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // don't mutate state here or the tests will fail
      return state.concat(action.todo);
    default:
      return state;
  }
};

// an example todo argument would be 'Learn React',
const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store12 = createStore(immutableReducer);
