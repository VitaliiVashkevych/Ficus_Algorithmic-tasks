//TASK 1
import { useReducer } from "react";
import "./App.css";
import React from "react";

interface State {
  value: number;
}

interface Action {
  type: string;
  payload?: number;
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "increment":
      return { value: state.value + (action.payload ?? 0) };
    case "decrement":
      return { value: state.value - (action.payload ?? 0) };
    case "reset":
      return { value: 0 };
    default:
      return state;
  }
}

function App() {
  const [value, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <>
      <h1>Current value: {value.value}</h1>
      <button
        onClick={() => {
          dispatch({ type: "increment", payload: 1 });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", payload: 1 });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
    </>
  );
}

export default App;

// TASK 2

import { useReducer, useState } from "react";
import "./App.css";

const initialState = {
  todos: [],
}

interface State {
  todos: {
    id: number
    text: string
  }[]
}

interface Action {
  type: string
  payload: {
    id: number
    text: string
  }
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.payload.id),
      }
    default:
      return state
  }
}

function App() {
  const [text, setText] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAdd = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (text === '') {
        return;
      }

      dispatch({
        type: 'ADD_TODO',
        payload: {
          id: Date.now(),
          text,
        },
      })
      setText('');
    }
  }

  const handleDelete = (id: number) => {
    dispatch({ type: 'DELETE_TODO', payload: { id, text: '' } })
  }

  return (
    <div className="App">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleAdd}
      />
      {Object.keys(state.todos).length === 0 ? (
        <p>Todo empty !!</p>
      ) : (
        state.todos.map(item => (
          <div key={item.id}>
            <p>{item.text}</p>
            <div onClick={() => handleDelete(item.id)}>
              Delete
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default App;

// TASK 3

import { useReducer } from "react";
import "./App.css";

const initialState = {};
const items = [
  {
    id: 1,
    name: "Monitor",
  },
  {
    id: 2,
    name: "Keyboard",
  },
  {
    id: 3,
    name: "Mouse",
  },
];

interface State {
  [key: number]: {
    name: string;
    id: number;
    quantity?: number;
  };
}

interface Action {
  type: string;
  payload: {
    id: number;
    name: string;
  };
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        [action.payload.id]: { ...action.payload, quantity: (state[action.payload.id]?.quantity || 0) + 1 }
      }
    case "REMOVE_FROM_CART":
      if (state[action.payload.id]?.quantity <= 0) {
        const newState = { ...state };
        delete newState[action.payload.id];
        return newState;
      }
      
      return {
        ...state,
        [action.payload.id]: { ...action.payload, quantity: (state[action.payload.id]?.quantity || 0) - 1 }
      }
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  
  return (
    <div className="App">
      {items.map((item) => (
        <div key={item.id}>
          {item.name}
          <button
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
          >
            Add {item.name} to cart
          </button>
        </div>
      ))}

      {Object.keys(state).map((id) => (
        <div key={id}>
          {state[id].name}
          {!!state[id].quantity && <div>Quantity: {state[id].quantity}</div>}
          <button
            onClick={() =>
              dispatch({ type: "ADD_TO_CART", payload: state[id] })
            }
          >
            Add
          </button>
          <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: state[id] })}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default App;
