import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [number, setNumber] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAdd = () => {
    const parsedInputValue = parseFloat(inputValue);
    if (!isNaN(parsedInputValue)) {
      setNumber(number + parsedInputValue);
      setInputValue("");
    }
  };

  const handleSubtract = () => {
    const parsedInputValue = parseFloat(inputValue);
    if (!isNaN(parsedInputValue)) {
      setNumber(number - parsedInputValue);
      setInputValue("");
    }
  };
  function Reset() {
    setNumber(0);
  }

  return (
    <div>
      <div className="body">
        <input
          type="number"
          placeholder="Enter a number"
          value={inputValue}
          onChange={handleInputChange}
        />
        <div>
          {" "}
          <button className="btn" onClick={handleAdd}>Add</button>
        </div>
        <div>
          {" "}
          <button className="btn" onClick={handleSubtract}>Subtract</button>
        </div>

        <div>
          <span className="heading">The Result is</span>
          <span > <mark className="output"><strong>{number}</strong></mark></span>
        </div>

        <div>
          <button className="btn" onClick={Reset}>reset</button>
        </div>
      </div>
    </div>
  );
};

export default App;
