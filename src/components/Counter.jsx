import { useState } from "react";

const Counter = () => {
  const [likes, setLikes] = useState(5);
  const [value, setValue] = useState();

  const increment = () => {
    setLikes(likes + 1);
  };
  const decrement = () => {
    setLikes(likes - 1);
  };
  return (
    <div>
      <h1>{likes}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};

export default Counter;
