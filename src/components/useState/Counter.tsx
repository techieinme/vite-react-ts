import Button from '@components/Button';
import { Component, useReducer } from 'react';

const initialState = { count: 0 };

type counterState = {
  count: number;
};

type updateAction = {
  type: 'increment' | 'decrement';
  payload: number;
};

type restAction = {
  type: 'reset';
};

// type actionState = {
//   type: 'increment' | 'decrement' | 'reset';
//   payload?: number;
// };

type actionState = updateAction | restAction;
function reducer(state: counterState, action: actionState) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    case 'decrement':
      return { count: state.count - action.payload };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>{state.count}</h1>
      <Button handleClick={() => dispatch({ type: 'increment', payload: 10 })}>
        Increment
      </Button>
      <Button handleClick={() => dispatch({ type: 'decrement', payload: 10 })}>
        Decrement
      </Button>
      <Button handleClick={() => dispatch({ type: 'reset' })}>Reset</Button>
    </>
  );
};

export default Counter;




