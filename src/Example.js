import React, {
    Component,
    useEffect,
    useState,
    useReducer,
    useContext,
    createContext,
  } from "react";

function Example() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
        <p>You entered: {text}</p>
      </div>
    );
  }

export default Example