import { useState } from "react";

function TaskForm() {

  return ( 
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
