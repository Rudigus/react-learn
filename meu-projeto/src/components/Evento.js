function Evento({numero}) {
  function meuEvento() {
    console.log(`Você foi coagido a clicar, experimento número ${numero}`);
  }

  return (
    <div>
      <p>Botão clicável abaixo, pode clicar de graça :)</p>
      <button onClick={meuEvento}>Clique AGORA</button>
    </div>
  )
}

export default Evento;