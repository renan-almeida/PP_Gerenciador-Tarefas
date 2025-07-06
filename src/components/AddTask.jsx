import  { useState } from "react";

function AddTask({ onAddTask}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div className="space-y-4 bg-slate-200 p-6 rounded-md shadow flex flex-col gap-4">
            <input className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" 
                type="text" 
                placeholder="Digite o título da tarefa" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}/>

            <input className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" 
                type="text" 
                placeholder="Digite a descrição da tarefa"
                value={description} 
                onChange={(e) => setDescription(e.target.value) } />
                
                <button className="bg-slate-500 text-white rounded-md px-4 py-2 font-medium hover:bg-slate-600 transition-colors duration-300 cursor-pointer
                " onClick={() => onAddTask(title, description)}>
                   Adicionar Tarefa
                </button>
        </div>
    )
}
export default AddTask;