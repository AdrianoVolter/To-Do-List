import { useState } from "react";

function CardAdicionar() { 

    const [tarefa, setTarefa] = useState('')


    return(

        <div className="card">

            <input 
                type="text" 
                placeholder="Adicionar tarefa" 
                value={tarefa}
                onChange={(e) => setTarefa(e.target.value)}
                
                />
            <button
                onClick={() => {

                    console.log(tarefa)
                    setTarefa('')
                    
                }}
                >Adicionar Tarefa
             </button>

        </div>

    )

}
export default CardAdicionar