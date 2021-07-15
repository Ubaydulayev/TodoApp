import React from 'react';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "first todo",
      status: true
    },
    {
      id: 2,
      title: "second todo",
      status: true
    },
    {
      id: 3,
      title: "third todo",
      status: false
    },
  ])

  return (
    <div className="container">
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
