import { useState } from 'react'
import './App.css'
import CardAdicionar from './components/CardAdicionar'

function App() {
  const [listaDeTarefas, setListaDeTarefas] = useState([
    { id: 1, texto: "Tarefa 1", finalizado: false }
  ])

  function adicionarTarefa(texto) {
    const novaTarefa = {
      id: listaDeTarefas.length + 1,
      texto,
      finalizado: false
    }
    setListaDeTarefas([...listaDeTarefas, novaTarefa])
  }

  return (
    <div className='row container bg-danger'>
      <div className='form-control  bg-primary'>
        <CardAdicionar 
          className='form-control'
          adicionarTarefa={adicionarTarefa} />
      </div>
      
       

     <div className=''>
      <ol>
         { 
        listaDeTarefas.map(tarefa => (
          <li key={tarefa.id}>{tarefa.texto}</li>
        ))
      }
      </ol>
      
     </div>
     
    </div>
  )
}

export default App
