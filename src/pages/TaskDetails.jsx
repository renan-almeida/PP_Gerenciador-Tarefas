import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskDetails() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description")
    return (
        <div className="h-screen
        w-screen bg-slate-500 p-6">
          <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
            <button className="absolute left-0 top-0 bottom-0 text-slate-100 cursor-pointer"
            onClick={() => navigate(-1)}>
              <ChevronLeftIcon />
            </button>
            <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes da Tarefa
          </h1>
        </div>
          
        <div className="w-[500px]
         space-y-4 bg-slate-200 p-6 rounded-md
          shadow text-center flex flex-col items-center gap-4
          border-2 border-black">
            <h2 className="text-2xl text-slate-700 font-bold">{title}</h2>
            <p className="text-slate-600 font-medium">{description}</p>
        </div>
        </div>
      </div>
    )
}

export default TaskDetails;