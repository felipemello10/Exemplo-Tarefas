import {useState} from 'react'

const Contador = () => {

    // HOOK - userState - Manipula o estado da variável
    const [contador,setContador]=useState(0);


  return (
    <>
      <h1>Contagem Inicial:{contador}</h1>
    <button onClick={()=>setContador(contador +1)}>Aumentar</button>
    <button onClick={() => setContador(contador -1)}>Diminuir</button>
    </>
  )
}

export default Contador

//função que chama outra função chama call back
// + encremento e - decremento