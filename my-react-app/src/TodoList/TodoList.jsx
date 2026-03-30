import { useState } from "react";
import { v1 } from "uuid";

function TodoList({ title, tasks }) {
  const [newTasks, setTasks] = useState(tasks);
  const [titleNewTasks, setTitle] = useState("");
  const [filter, setFilter] = useState("all");

  const removeTask = (id) => {
    let resultTask = newTasks.filter((t) => t.id !== id);
    setTasks(resultTask);
  };

  const addTask = (title) => {
    const task = {
      id: v1(),
      title: title,
      isDone: false,
    };

    setTasks([task, ...newTasks]);
    setTitle("");
  };

  let filteredTasks = newTasks;
  if (filter === "completed") {
    filteredTasks = newTasks.filter((t) => t.isDone === true);
  }
  if (filter === "active") {
    filteredTasks = newTasks.filter((t) => t.isDone === false);
  }

  return (
    <div>
      <h3>{title}</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask(titleNewTasks);
        }}
      >
        <input
          type="text"
          value={titleNewTasks}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <button type="submit">+</button>
      </form>
      <ul>
        {filteredTasks.map((task) => {
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
        <button
          onClick={() => {
            setFilter("all");
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            setFilter("active");
          }}
        >
          Active
        </button>
        <button
          onClick={() => {
            setFilter("completed");
          }}
        >
          Completed
        </button>
      </div>
    </div>
  );
}

export default TodoList;
