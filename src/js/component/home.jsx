import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";



//create your first component
const Home = () => {
  const [taskInput, setTaskInput] = useState(""); //Estado para el valor del campo de entrada

  const [toDoList, seToDoList] = useState([]); //Estado para el to do list
  const [completedCount, setCompletedCount] = useState(0); //estado para el contador

  // Actualiza el estado con el nuevo valor del campo de entrada
  const handleTask = (event) => {
    setTaskInput(event.target.value);
  };

  //Método que se llama cuando se envía el formulario
  const handleSubmitted = (event) => {
    event.preventDefault();
    seToDoList([...toDoList, {task: taskInput, completed:false}]); //Agrega el valor del input a la lista // Utiliza la sintaxis de propagación (...) para crear una nueva matriz que contiene todos los elementos de la matriz toDoList actual y agrega el nuevo elemento taskInput al final. //Actualiza el estado toDoList con la nueva matriz creada, que ahora incluye el nuevo elemento taskInput.// En otras palabras, esta línea está reemplazando el estado toDoList con una nueva versión que contiene todos los elementos existentes más el nuevo elemento del campo de entrada.// Por ejemplo, si toDoList tenía [ "Tarea 1", "Tarea 2" ] y el usuario ingresó "Nueva tarea" en el campo de entrada y envió el formulario, después de ejecutar esta línea, toDoList se actualizaría a [ "Tarea 1", "Tarea 2", "Nueva tarea" ].
    setCompletedCount(completedCount + 1); 
    setTaskInput(""); //Limpia el campo de entrada después de enviar el formulario
  };

  const removeTodO = (toDo) => {
    const newtoDoList = toDoList.filter((element) => element.task !== toDo.task);
    seToDoList(newtoDoList);
    if (!toDo.completed) {
      setCompletedCount(completedCount - 1);
    }
  };

  return (
    <>
      <div className="tittle">
        <h1> To Do's </h1>
      </div>
      <div className="container bg-custom">
        <div className="row">
          <form onSubmit={handleSubmitted}>
            <input
              className="col-11"
              type="text"
              value={taskInput}
              id="inputTarea"
              onChange={handleTask}
            />

            <button type="submit" className="col-1">
              <i className="fas fa-pencil-alt"></i>
            </button>
          </form>
        </div>
      
      <div className="toDoList">
        <div className="container px-1">
        <div className="row px-2">
          {toDoList.map((toDo, index) => (
            <div
              className="col-12 d-flex justify-content-between border p-0"
              key={index}
            >
              {toDo.task}
              <button
                className="btn btn-light"
                onClick={() => removeTodO(toDo)}
              >
                <i className="fas fa-times"></i>
              </button>
              </div>
          ))}
          
           </div>
        </div> 
       
        <p>{completedCount} {"item left"}</p>
      
      </div>
      </div>
    </>
  );
};

export default Home;
