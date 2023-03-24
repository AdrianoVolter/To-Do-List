// Description: Componente responsável por adicionar uma nova tarefa
import { useState } from "react";

//função principal
function CardAdicionar({adicionarTarefa}) {


//useState
    const [tarefa, setTarefa] = useState("");
    
    //função para adicionar tarefa
    function handleAdicionar(event) {
        event.preventDefault();
        if(tarefa != "") {
            adicionarTarefa(tarefa);
            setTarefa("");
        }
    }  
    
    //return
    return (
        <div className="adicionar">
        <input
            placeholder="Digite a tarefa"
            className="input m-3"
            type="text"
            value={tarefa}
            onChange={(e) => setTarefa(e.target.value)}
        />
        <button
            className="btn btn-info m-3"  
            onClick={handleAdicionar}>
                Adicionar
            </button>
    
        </div>
    );
    }  
    
    //exportação     
 export default CardAdicionar;