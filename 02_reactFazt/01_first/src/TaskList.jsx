import { useEffect, useState } from "react";

console.log(data, "data");

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  if (tasks.length === 0) {
    return <h1>no hay tareas</h1>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default TaskList;
