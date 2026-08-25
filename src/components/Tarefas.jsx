import {useState, useEffect} from 'react'

const Tarefas = () => {

    //hook- useState -Manipula o estado da variavel
    const [tarefas,setTarefas]=useState(()=>{
        const salvarTarefas = localStorage.getItem("item-tarefa");
        return salvarTarefas ? JSON.parse(salvarTarefas) : [];


    });

    const [campo,setCampo] = useState("");
    
    //HOOK - useEffect - Realiza o efeito colateram, nesse exemplo vai mostrar a tarefa adicionada em tempo real
    useEffect(()=>{
        localStorage.setItem("item-tarefa",JSON.stringify(tarefas))
    },[tarefas])

  return (
    <>
      
    </>
  )
}

export default Tarefas
