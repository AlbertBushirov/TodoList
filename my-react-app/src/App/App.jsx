import { useState, useEffect } from "react";
import TodoList from "../TodoList/TodoList.jsx";
import "./App.css";

let tasks1 = [
  { id: 1, title: "CSS", isDone: true },
  { id: 2, title: "JS", isDone: true },
  { id: 3, title: "React", isDone: false },
];

function App() {
  return (
    <div className="App">
      <TodoList title="Что изучил" task={tasks1} />
      <TodoList title="Что буду изучать " task={tasks1} />
      <TodoList title="Что изучаю" task={tasks1} />
    </div>
  );
}

export default App;
