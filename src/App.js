import logo from './logo.svg';
import './App.css';
import consola from 'consola'

function App() {
  const today = new Date()
  console.log(today);

  const date = today.getFullYear()

  console.log(date);

  const onCLick = function () {
    consola.success('Hello')
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={onCLick}>Hello</button>
      <footer>{date}</footer>
      </header>
    </div>
  );
}

export default App;
