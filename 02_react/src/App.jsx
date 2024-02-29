import { useState } from "react";
import "./App.module.css";

function App() {
  let [counter, setCounter] = useState(0);

  // let counter = 0;

  const addCount = () => {
    if (counter == 20) return;
    setCounter(counter + 1);
  };

  const decreaseCount = () => {
    if (counter == 0) return;
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      {(counter === 20) ? (<p>Reached the upper limit.</p>) : (<p>You can add vaalue.</p>)}
      <button onClick={addCount}>Add Value</button>
      <br />
      <button onClick={decreaseCount}>Remove Value</button>
      {(counter === 0) ? (<p>Reached the lower limit.</p>) : (<p>You can remove vaalue.</p>)}
    </>
  );
}

export default App;
