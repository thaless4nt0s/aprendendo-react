import React from 'react';
import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

function App() {
  return (
    <div className="App">
      <ClickCounter name="thales"/>
      <HoverCounter/>
    </div>
  );
}

export default App;
