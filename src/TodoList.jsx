import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      if (editingIndex !== null) {
        const updatedTodos = [...todos];
        updatedTodos[editingIndex] = inputValue;
        setTodos(updatedTodos);
        setEditingIndex(null);
      } else {
        setTodos([...todos, inputValue]);
      }
      setInputValue("");
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    if (index === editingIndex) {
      setEditingIndex(null);
    }
  };

  const editTodo = (index) => {
    setInputValue(todos[index]);
    setEditingIndex(index);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a todo..."
      />
      <button onClick={addTodo}>
        {editingIndex !== null ? "Update" : "Add Todo"}
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => editTodo(index)}>Edit</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
