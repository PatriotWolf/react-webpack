import { useState } from 'react';
import CounterButton from './components/CounterButton';
const App = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>Hello World</h1>
      <h3>Component Counter Testing</h3>
      <CounterButton
        count={count}
        setCount={() => setCount(count => count + 1)}
      />
    </div>
  );
};
export default App;
