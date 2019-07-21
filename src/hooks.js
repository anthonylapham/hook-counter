import React, { useState, useEffect } from 'react';
import './App.css'

const Hooks = props => {
  const [counter, updateCounter] = useState(0);

  useEffect(() => {
    document.title = `The Counter: ${counter}`;
  })

  return (
    <>
    <div className="container">
      <button
        onClick={() => updateCounter(counter + 1)}
      >
       Increment counter
      </button>
      <button
        onClick={() => updateCounter(counter -1)}
      >
        Decrement Counter
      </button>
      <button
        onClick={() => updateCounter(counter * counter)}
      >
        Square counter
      </button>
      <button
        onClick={() => updateCounter(counter === 0)}
      >
        Reset counter
      </button>
    </div>
    <div className="counterContainer">
      <h1>{counter}</h1>
    </div>
    </>
  )
}

export default Hooks;
