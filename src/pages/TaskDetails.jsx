import { useSearchParams } from "react-router-dom";

function TaskDetails() {
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description")
    return (
        <div className="h-screen
        w-screen bg-slate-500 p-6 flex flex-col items-center space-y-8">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <div className="w-[500px]
         space-y-4 bg-slate-200 p-6 rounded-md
          shadow text-center flex flex-col items-center gap-4
          border-2 border-black">
          <h2 className="text-2xl text-slate-800 font-bold">{title}</h2>
          <p className="text-slate-600 font-medium">{description}</p>
        </div>
      </div>
    )
}

export default TaskDetails;