import { useState } from "react";


function CardAdicionar({adicionarTarefa}){



    const [texto, setTexto] = useState('')


    return(

        <div className="card">

            <input 
                type="text" 
                placeholder="Adicionar tarefa" 
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                
                />
            <button
                onClick={() => {

                    console.log(texto)
                    setTexto('')

                }}
                >Adicionar Tarefa
             </button>
             <p>{
                    texto}
            </p>

        </div>

    )

}



export default CardAdicionar