import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const n1 = 1;
  const n2 = 2;
  const nome = "Maria";

  function sum(a, b) {
    return a + b;
  }

  return (
    <div className="App">
      <h1>Testando 1 2 3</h1>
      <p>Aparentemente tá funcionando</p>
      <p>A soma de {n1} com {n2} é {sum(n1, n2)}</p>
      <HelloWorld />
      <SayMyName nome="Jubiscreudo" />
      <SayMyName nome="Felipe" />
      <SayMyName nome={nome} />
      <Pessoa
        foto="https://via.placeholder.com/150"
        nome="Patrícia"
        idade="32"
        profissao="Padeira"
      />
    </div>
  );
}

export default App;
