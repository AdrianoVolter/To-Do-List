// Importações
import { useState } from 'react'
import './App.css'
import CardAdicionar from './components/CardAdicionar'
import ListItem from './components/ListItem'

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

//return
  return (
    <div className='row container'>
      <h1>To Do List</h1>
      <div className='form-control  bg-secondary'>
        <CardAdicionar 
          className='form-control'
          adicionarTarefa={adicionarTarefa} />
      </div>
     <div className='form-control bg-secondary'>
        <ol className='list-group'>
          {listaDeTarefas.map((tarefa) => (
            <ListItem key={tarefa.id} tarefa={tarefa} />
          ))}
        </ol>

     </div>
     
    </div>
  )
}

//exportação
export default App
