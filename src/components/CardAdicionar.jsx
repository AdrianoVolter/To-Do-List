import { useState } from "react";


function CardAdicionar({adicionarTarefa}) {



    const [tarefa, setTarefa] = useState("");
    
    function handleAdicionar(event) {
        event.preventDefault();
        if(tarefa != "") {
            adicionarTarefa(tarefa);
            setTarefa("");
        }
    }    
    return (
        <div>
        <input
            className="input m-3"
            type="text"
            value={tarefa}
            onChange={(e) => setTarefa(e.target.value)}
        />
        <button  
            onClick={handleAdicionar}>
                Adicionar
            </button>
    
        </div>
    );
    }   
    export default CardAdicionar;