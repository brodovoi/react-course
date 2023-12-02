import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(0);
  const incrementCounnt = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const buttonStyle = {
    backgroundColor: 'lightgreen',
  };

  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={incrementCounnt} />
      <Button onClick={incrementCounnt} />
      <Button onClick={incrementCounnt} />
      <Button onClick={incrementCounnt} />
      {count > 0 && (
        <div>
          <button style={buttonStyle} onClick={resetCount}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
