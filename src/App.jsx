import { useState } from 'react'
import './App.css'
import CardAdicionar from './components/CardAdicionar'
//import Proptypes from 'prop-types'

// todo list de tarefas
//No app.jsx crie um useState para armazenar um array de objetos(que serão as tarefas).
//Crie um componente CardAdicionar que terá um input e um botão. O input será para o usuário digitar o nome da tarefa e o botão será para adicionar a tarefa no array de tarefas.
//Crie um componente CardTarefa que receberá uma tarefa como propriedade e exibirá o nome da tarefa e um botão para excluir a tarefa.





function App() {

const [tarefas, setTarefas] = useState([{
    id: 1, texto: 'Estudar React', finalizado: false
}])

  function adicionarTarefa(tarefa) {
    setTarefas([...tarefas, tarefa])
  }


  return (
    <div className="App">

      <CardAdicionar adicionarTarefa={adicionarTarefa}
        
      />

    </div>
  )
}

// Proptype = {
//   tarefas: Proptypes.array.isRequired,
//   adicionarTarefa: Proptypes.func.isRequired
// }


export default App


