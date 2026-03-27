import { useState } from "react";

function TodoList({ title, tasks }) {
  const [newTasks, setTasks] = useState(tasks);
  const [newTitle, setTitle] = useState("");

  const removeTask = (id) => {
    let resultTask = newTasks.filter((t) => t.id !== id);
    setTasks(resultTask);
  };

  const addTask = (title) => {
    const newTask = {
      id: title + Math.random(),
      title: title,
      isDone: false,
    };

    setTasks([newTask, ...newTasks]);
    setTitle("");
  };

  const handleInputChange = (event) => {
    setTitle(event.target.value); // обновляем состояние при каждом вводе текста
  };

  return (
    <div>
      <h3>{title}</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask(newTitle);
        }}
      >
        <input type="text" value={newTitle} onChange={handleInputChange} />
        <button type="submit">+</button>
      </form>
      <ul>
        {newTasks.map((task) => {
          return (
            <li key={task.id}>
              <input type="checkbox" checked={task.isDone} />
              <span>{task.title}</span>
              <button onClick={() => removeTask(task.id)}>X</button>
            </li>
          );
        })}
      </ul>
      <div>
        <button>All</button>
        <button>ActiveAll</button>
        <button>Completed</button>
      </div>
    </div>
  );
}

export default TodoList;
