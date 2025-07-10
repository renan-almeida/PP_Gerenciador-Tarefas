import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import ListTasks from "./components/ListTasks";
import {v4} from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])

    function onTaskClick(taskId) { 
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    })
    setTasks(newTasks);
    }

    function onDeleteTaskClick(taskId) {
      const newTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(newTasks);
    }

    function onAddTask(title, description) {
      const newTasks = {
        id: v4(),
        title: title,
        description: description,
        isCompleted: false
      }
      if (!title.trim() || !description.trim()) {
        alert("Por favor, preencha todos os campos.");
        return;
      }
      setTasks([...tasks, newTasks]);
    }
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
      <AddTask onAddTask={onAddTask} />
      <ListTasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
      </div>
    </div>
  );
}
export default App;