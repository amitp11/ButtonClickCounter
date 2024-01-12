import React,{useState} from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const increaseCount = () => {
    setCounter(counter + 1);
  }
  const decreaseCount = () => {
    setCounter(counter - 1);
  }
  const resetCount = () => {
    setCounter(0);
  }
  return (
       <div className="Home">
        <h2>HomePage</h2>
        <button type="button" id="showdiv" onClick={increaseCount}>Increase</button>
        <button type="button" id="showdiv" onClick={decreaseCount}>Decrease</button>
        <button type="button" id="showdiv" onClick={resetCount}>Reset</button>
        <p id="showdiv">{counter}</p>
       </div>
  );
}

export default App;
