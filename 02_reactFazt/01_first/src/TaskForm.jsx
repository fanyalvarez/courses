import { useState } from "react";

function TaskForm(props) {
  const [titleUst, setTitleUst] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // // console.log(title)
    // ------le estoy diciendo que va a crear un nuevo objeto
    // const newTask = {
    //   id: k ,
    //   title: titleUst,
    //   description: "una descripcion en prueba",
    // };
    // props.createTask(newTask)  


    // -----crea un string
    props.createTask(titleUst);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe tu tarea"
        onChange={(e) => {
          setTitleUst(e.target.value);
        }}
      />
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
