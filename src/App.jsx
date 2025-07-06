import { useState } from "react";
import AddTask from "./components/AddTask";
import ListTasks from "./components/ListTasks";
import {v4} from "uuid";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description:
        "Estudar programação é essencial para se tornar um desenvolvedor competente.",
        isCompleted: false,
    },
    {
      id: 2,
      title: "Fazer exercícios físicos",
      description:
        "Fazer exercícios físicos regularmente é importante para manter a saúde e o bem-estar.",
        isCompleted: false,
    },
    {
      id: 3,
      title: "Ler um livro",
      description:
        "Ler um livro é uma ótima maneira de adquirir conhecimento e relaxar.",
        isCompleted: false,
    }
  ])

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