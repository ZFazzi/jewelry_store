import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h1>Counter: {count}</h1>
      <button className="increment-btn" onClick={increment}>
        Increment
      </button>
      <button className="decrement-btn" onClick={decrement}>
        Decrement
      </button>
      <button className="reset-btn" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default Home;
