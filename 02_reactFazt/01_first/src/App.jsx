import { useEffect, useState } from "react";
import { tasks as data } from "./taks";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function App() {

  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
  };

  return (
    <>
      <TaskForm />
      <TaskList />
    </>
  );
}

export default App;
