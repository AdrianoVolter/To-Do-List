//Componente para exibir as informações de cada tarefa
//Ele deve receber como props a tarefa a ser exibida.

//importações
import { useState } from "react";

//função principal
function ListItem({tarefa}) {

//useState
    const [finalizado, setFinalizado] = useState(false);

//função para marcar como finalizado        
    function handleFinalizado() {
        setFinalizado(!finalizado);
    }

//return
    return (
        <div>
            <li className={finalizado ? "finalizado" : ""} onClick={handleFinalizado}>{tarefa.texto}</li>
        </div>
    );
}

//exportação
export default ListItem;
