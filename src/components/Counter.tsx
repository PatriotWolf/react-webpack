import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <h3>Component Counter Testing</h3>
      <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
    </div>
  );
};
