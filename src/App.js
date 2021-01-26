import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className="App">
      <h1>Hello CodeSandbox {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
