import './App.css';
import logo from './logo.svg';
import Greet from "./components/Greet"
import Welcome from './components/Welcome'
import Hello from "./components/Hello"
import Senna from './components/Senna'
import Message from './components/Message'
import Latifi from './components/Latifi'
import Fruits from './components/Fruits'
import Ola from './components/Ola'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';


function App() {
  return (
    <div className="App">
      {/*<Counter/>*/}
      {/*<Welcome name="Bruce " heroName="Batman" />
      <Latifi></Latifi>*/}
      {/*<Message/>*/} 
      {/*<Greet name="Bruce " heroName="Batman">
        <p>This is children props</p>  
      </Greet>
      <Greet name="Travis " heroName="Batman">
        <button>Action</button>
      </Greet>
      <Greet name="Diana " heroName="Batman">
        <input type="text"></input>
      </Greet>
      <Welcome name="Bruce " heroName="Batman" />*/}

      {/*<Hello></Hello>*/}
      {/*<Senna></Senna>*/}
      <ParentComponent/>
    </div>
  );
}

export default App;
