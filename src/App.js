import "./App.css";
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    let reverseString = "";
    let sum = 0;
    for (let i = input.length - 1; i >= 0; i--) {
      reverseString += input[i];
      const code = input.toUpperCase().charCodeAt(i);
      if (code > 64 && code < 91) sum += code - 64;
    }
    setOutput(reverseString + " " + sum);
  };

  return (
    <div className="App">
      <h1>String Reversal and Sum Calculation</h1>
      <p>
        Description - input string below to display reverse string, and also the
        sum of counting the characters position(in integer) in string. Eg if you
        enter sita, result will be atis 49 ( s =19, i=9,t=20, a=1,
        sum=19+9+20+1=49)
      </p>
      <form>
        <label>
          Input String:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" onClick={handleClick} />
      </form>
      <div>
        <label>Output String:{output}</label>
      </div>
    </div>
  );
}

export default App;
