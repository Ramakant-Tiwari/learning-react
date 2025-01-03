import { useState } from "react";
// import AddTask from "./components/AddTask";
// import TaskShow from "./components/TaskShow";
// import Random from "./components/Random";

import css from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";

export default function App() {
  return (
    <main id={css.calculator}>
      <section id={css.flex}>
      <center><h1 style={{fontSize: "2.5rem", fontFamily: "sans-serif"}}>Calculator</h1></center>
      <Display />
      <ButtonsContainer />
      </section>
    </main>
  );
}

// export default function App() {
//   const [toDos, setToDos] = useState(JSON.parse(localStorage.getItem("toDos")) || []);

//   const addTaskToDos = function (toDo) {
//     const updatedToDos = [...toDos, toDo];
//     setToDos(updatedToDos);
//     localStorage.setItem("toDos", JSON.stringify(updatedToDos));
//   };

//   const deleteTask = function (task) {
//     const updatedToDos = toDos.filter((toDo) => toDo.task !== task);
//     setToDos((toDos) => toDos.filter((toDo) => toDo.task !== task));
//     localStorage.setItem("toDos", JSON.stringify(updatedToDos));
//   };

//   return (
//     <>
//       <h1>Todo App</h1>
//       <AddTask addTaskToDos={addTaskToDos} />
//       {toDos.length === 0 && <h2>First add a task to do.</h2>}
//       {toDos.map((toDo, index) => {
//         return (
//           <TaskShow key={index} deleteTask={deleteTask} task={toDo.task} date={toDo.date}></TaskShow>
//         );
//       })}
//     </>
//   );
// }

// export default function App() {
//     return <section>
//         <h1>Namaskar, RKT</h1>
//         <Random />
//         <Random />
//         <Random />
//         <Random />
//         <Random />
//     </section>
// }
