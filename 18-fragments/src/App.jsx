import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <h1>React Fragment</h1>
      <p>fragment second para</p>
    </React.Fragment>
  );
}

export default App;
