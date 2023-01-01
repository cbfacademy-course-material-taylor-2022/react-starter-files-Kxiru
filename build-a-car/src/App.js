import "./App.css";
import React from "react";
import Car from "./components/Car";
import Skateboard from "./components/Skateboard";
import Bicycle from "./components/Bicycle";
import Bus from "./components/Bus";
import Truck from "./components/Truck";

function App() {
  return (
    <div className="App">
      <Car />
      <Bicycle />
      <Truck />
      <Bus />
      <Skateboard />
    </div>
  );
}

export default App;
