import React from 'react';
import './App.css';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverCounter2';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/* <ClickCounter2/>
      <HoverCounter2/>
      <User render={(isLogged)=> isLogged ? 'Vishwas': 'Guest'}/> */}
      <Counter>
        {(count, incrementCount) =>
          <ClickCounter2 count={count} incrementCount={incrementCount}/>
        }
      </Counter>

      <Counter >
        {(count, incrementCount) =>
          <HoverCounter2 count={count} incrementCount={incrementCount}/>
        }
      </Counter>
    </div>
  );
}

export default App;
