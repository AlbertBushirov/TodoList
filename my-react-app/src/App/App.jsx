import { useState, useEffect } from "react";
import TodoList from "../TodoList/TodoList.jsx";
import "./App.css";
import { v1 } from "uuid";

let tasks1 = [
  { id: v1(), title: "CSS", isDone: true },
  { id: v1(), title: "JS", isDone: true },
  { id: v1(), title: "React", isDone: false },
  { id: v1(), title: "React", isDone: false },
];
console.log(tasks1);

function App() {
  return (
    <div className="App">
      <TodoList title="Что изучил" tasks={tasks1} />
    </div>
  );
}

export default App;
