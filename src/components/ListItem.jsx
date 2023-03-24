//Componente para exibir as informações de cada tarefa
//Ele deve receber como props a tarefa a ser exibida.

//importações
import { useState } from "react";
import Proptypes from "prop-types";

//função principal
function ListItem({tarefa, removerTarefa}) {

//useState
    const [finalizado, setFinalizado] = useState(false);

//função para marcar como finalizado        
    function handleFinalizado() {
        setFinalizado(!finalizado);
    }

//return
    return (
        <div>
            <li 
                className={finalizado ? "finalizado" : ""} 
                onClick={handleFinalizado}>{tarefa.texto}
                <button className="btn btn-danger" onClick={() => removerTarefa(tarefa.id)}>Remover</button>
                </li>
            
            
        </div>
    );
}

//propTypes
ListItem.propTypes = {
    tarefa: Proptypes.object.isRequired,
    removerTarefa: Proptypes.func.isRequired
}
//exportação
export default ListItem;
