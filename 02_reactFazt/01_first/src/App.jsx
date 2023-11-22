import { useState } from "react";
import { tasks as data } from "./taks";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState(data);
  function createTask(taskTitle) {
    // setTasks([...tasks, task]);   cambia al sig: porq no agrega un objeto sino solo un string
    setTasks([...tasks, {
      id: tasks.length,
      title: taskTitle,
      description: "nueva tarea",
    }]);
  }
  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
