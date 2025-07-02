import { ChevronRightIcon, TrashIcon } from "lucide-react";

function ListTasks({ tasks, onTaskClick, onDeleteTaskClick }) {
    return (
        <ul className="space-y-2 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task) => (
            <li key={task.id} className="flex gap-2">
                <button
                    onClick={() => onTaskClick(task.id)} 
                    className={`bg-slate-400 w-full text-left text-white p-2 rounded-md 
                        hover:bg-slate-500 transition-colors duration-300
                        ${task.isCompleted ? " line-through" : ""}`}>
                    {task.title}
                    </button>
                <button className="bg-slate-400 p-2 text-white rounded-md ml-2
                    hover:bg-slate-500 transition-colors duration-300">
                    <ChevronRightIcon />
                </button>
                 <button className='bg-slate-400 p-2 text-white rounded-md ml-2
                    hover:bg-slate-500 transition-colors duration-300'
                    onClick={() => onDeleteTaskClick(task.id)}>
                    <TrashIcon />
                </button>
                </li>
        ))} 
        </ul>
    )
}
export default ListTasks;