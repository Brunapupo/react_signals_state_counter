import { React, useState } from 'react';
import './App.css';
import { signal } from '@preact/signals-react';

function App() {
  
  //const [count, setCount] = useState(0);
  //const update = (val) => setCount((pre) => pre + val);

  const count = signal(0);
  const update = (val) => (count.value += val);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='app-titulo__header'>React Signals State Counter</h1>
      </header>
      <div>
          <div className='button-container'>
            <h2 className='App-count'>Count: {count}</h2>
            <button className="App-increment" onClick={() => update(1)}>Increment</button>
            <button className="App-decrement" onClick={() => update(-1)}>Decrement</button>
          </div>
      </div>
    </div>
  );
}

export default App;
