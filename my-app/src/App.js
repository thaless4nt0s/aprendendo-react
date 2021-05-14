import React from 'react';
import './App.css';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/CreateContext';

function App() {
  return (
    <div className="App">
      <UserProvider value='Luan gameplay'>
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
