import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Effect from './components/Effect';
import Form from './components/Form';
import Item from './components/Item';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <Form />
      <hr />
      <Item />
      <hr />
      <Effect />
    </div>
  );
}

export default App;
