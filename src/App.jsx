// Importações
import { useState } from 'react'
import './App.css'
import CardAdicionar from './components/CardAdicionar'
import ListItem from './components/ListItem'
import Proptypes from 'prop-types'

//função principal
function App() {
  const [listaDeTarefas, setListaDeTarefas] = useState([
    { id: 1, texto: "Exemplo de Tarefa ", finalizado: false }
  ])

//função para adicionar tarefa
  function adicionarTarefa(texto) {
    const novaTarefa = {
      id: listaDeTarefas.length + 1,
      texto,
      finalizado: false
    }
    setListaDeTarefas([...listaDeTarefas, novaTarefa])
  }

//função para remover tarefa
  function removerTarefa(remover) {
    const novaLista = listaDeTarefas.filter((tarefa) => tarefa.id !== remover)
    setListaDeTarefas(novaLista)
  }



//return
  return (
    <div className='row container'>
      <h1>To Do List</h1>
      <div className='form-control  bg-secondary'>
        <CardAdicionar 
          className='form-control'
          adicionarTarefa={adicionarTarefa} />
        <ol className='list-group'>
          {listaDeTarefas.map((tarefa) => (
            <ListItem 
              key={tarefa.id} 
              tarefa={tarefa} 
              removerTarefa={removerTarefa}
              />
          ))}
        </ol>
     </div>
    </div>
  )
}


//propTypes
App.propTypes = {
  listaDeTarefas: Proptypes.array.isRequired,
  adicionarTarefa: Proptypes.func.isRequired,
  removerTarefa: Proptypes.func.isRequired
}
//exportação
export default App
