import React, { useState, useEffect } from "react";
import axios from "axios";
import InputTodo from "./InputTodo";
import ListTodo from "./ListTodo";

function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    axios
      .get("http://localhost:8000/api/todos")
      .then((res) => {
        if (res.data) {
          setTodos(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  const deleteTodo = (id) => {
    axios
      .delete(`http://localhost:8000/api/todos/${id}`)
      .then((res) => {
        if (res.data) {
          getTodos();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="Center">
      <h1> My Todo(s) </h1>
      <InputTodo getTodos={getTodos} />
      <br></br>
      <ListTodo todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Todo;
