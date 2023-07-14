import React, {
  Component,
  useEffect,
  useState,
  useReducer,
  useContext,
  createContext,
} from "react";
import Header from "./Header";

import ChildComponent from "./ChildComponent";
import ObjectStateComponent from "./ObjectStateComponent";
import TodoList from "./TodoList";
import List from "./List";
import MyComponent from "./MyComponent";
import Props from "./Props";
import Example from "./Example";


function App() {
  const [count, setcount] = useState(0);

  function updateCount() {
    setcount(count + 4);
  }

  function updateCoun() {
    setcount(count - 4);
  }

  // useEffect(() => {
  //   console.log("run");
  // }, []);

  function getData(data) {
    console.log(data);
  }

  const [dataFromChild, setDataFromChild] = useState("");

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };

  const items = ["Apple", "Banana", "Orange"];

  return (
    <div>

      <Example/>

<Props/>
      <MyComponent/>
      <TodoList />

      <List />

      <ObjectStateComponent />
      <h2>Data from Child: {dataFromChild}</h2>
      <ChildComponent onData={handleDataFromChild} />

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}

        {items.map((item, index) => (
          <li key={index}> {index}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
