import React, { useState, useEffect } from 'react';

function App() {
  const [food, setFood] = useState("Chicken")

  useEffect()

  return (
    <div className="App">
      <h1>Hello World !</h1>
      <h2>{food}</h2>
    </div>
  );
}

export default App;
