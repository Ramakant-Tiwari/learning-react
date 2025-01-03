import { useState } from "react";

export default function AddTask({addTaskToDos}) {
    const [inputText, setInputText] = useState("");
    const [inputDate, setInputDate] = useState("");
    
    const addTaskOnSubmit = function(e) {
        e.preventDefault();
        if (!e.target.task.value || !e.target.date.value) return;
        addTaskToDos({task: e.target.task.value, date: e.target.date.value});
        setInputDate("");
        setInputText("");
    }

  return (
    <form onSubmit={addTaskOnSubmit}>
      <input type="text" name="task" required value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <input type="date" name="date" required value={inputDate} onChange={(e) => setInputDate(e.target.value)} />
      <button>Add</button>
    </form>
  );
}
