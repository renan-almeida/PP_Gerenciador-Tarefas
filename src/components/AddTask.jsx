function AddTask() {
    return (
        <div className="bg-slate-200 p-6 rounded-md shadow flex flex-col gap-4">
            <input className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" 
                type="text" 
                placeholder="Digite o título da tarefa" />
            <input className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" 
                type="text" 
                placeholder="Digite a descrição da tarefa" />
                <button className="bg-slate-400 text-white rounded-md px-4 py-2 hover:bg-slate-500 transition-colors duration-300 cursor-pointer">
                    Adicionar Tarefa
                </button>
        </div>
    )
}
export default AddTask;