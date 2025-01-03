import { useState } from "react";

export default function TaskShow({ deleteTask, task, date }) {
  const [bgColor, setBgColor] = useState("default");
  const deleteOnClick = function (e) {
    deleteTask(task);
    // setBgColor("purple");
  };

  return (
    <article style={{ backgroundColor: bgColor }}>
      <p>{task}</p>
      <p>{date}</p>
      <button onClick={deleteOnClick}>
        Delete Task
      </button>
    </article>
  );
}
