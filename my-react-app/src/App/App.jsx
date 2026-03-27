import { useState, useEffect } from "react";
import TodoList from "../TodoList/TodoList.jsx";
import "./App.css";

let tasks1 = [
  { id: 1, title: "CSS", isDone: true },
  { id: 2, title: "JS", isDone: true },
  { id: 3, title: "React", isDone: false },
  { id: 4, title: "React", isDone: false },
];

function App() {
  return (
    <div className="App">
      <TodoList title="Что изучил" tasks={tasks1} />
    </div>
  );
}

export default App;
