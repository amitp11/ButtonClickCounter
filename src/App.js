import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

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
        <div className="A">
        <h2 style={{float:"left"}}>HomePage</h2>
        <h4 style={{float:"right"}}>Hello Amit</h4>
        </div>
        <div className="B" id="counter">
        <Button variant="danger" id="showdiv" onClick={increaseCount}>Increase</Button>
        <Button variant="success" id="showdiv" onClick={decreaseCount}>Decrease</Button>
        <Button variant="secondary" id="showdiv" onClick={resetCount}>Reset</Button>
        <input type="text" value={counter}/>
        </div>
       </div>
  );
}

export default App;
