import React, { useState, useEffect } from 'react';

const Hooks = props => {
  const [counter, updateCounter] = useState(0);

  useEffect(() => {
    document.title = `The Counter: ${counter}`;
  })

  return (
    <>
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
      <h1>{counter}</h1>
    </>
  )
}

export default Hooks;
