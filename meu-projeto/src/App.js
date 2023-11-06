import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  const n1 = 1;
  const n2 = 2;

  function sum(a, b) {
    return a + b;
  }

  return (
    <div className="App">
      <h1>Testando 1 2 3</h1>
      <p>Aparentemente tá funcionando</p>
      <p>A soma de {n1} com {n2} é {sum(n1, n2)}</p>
      <HelloWorld />
    </div>
  );
}

export default App;
