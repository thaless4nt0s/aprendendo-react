import logo from './logo.svg';
import Greet from "./components/Greet"
import Welcome from './components/Welcome'
import Hello from "./components/Hello"
import Senna from './components/Senna'
import './App.css';

function App() {
  return (
    <div className="App">
      <Greet></Greet>
      <Welcome></Welcome>
      <Hello></Hello>
      <Senna></Senna>
    </div>
  );
}

export default App;
