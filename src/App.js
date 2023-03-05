import React, { useState, useCallback } from 'react';
import Keypad from './components/Keypad';
import Header from './components/Header';
import './App.css';

const MemoizedKeypad = React.memo(Keypad);

function App() {
  const [input, setInput] = useState('');

  const handleClick = useCallback((value) => {
    setInput(input + value);
  }, [input]);

  const handleEqual = useCallback(() => {
    setInput(eval(input).toString());
  }, [input]);

  const handleClear = useCallback(() => {
    setInput('');
  }, []);

  return (
    <div className='App'>
      <div className='calculator'>
        <Header/>
        <input className='display' type='text' value={input} />
        <MemoizedKeypad handleClear={handleClear} handleClick={handleClick} handleEqual={handleEqual} />
      </div>
    </div>
  );
}

export default App;
