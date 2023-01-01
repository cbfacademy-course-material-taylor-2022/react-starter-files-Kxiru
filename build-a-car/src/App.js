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
      <Car numberOfWheels="4" />
      <Bicycle numberOfWheels="2" />
      <Bus numberOfWheels="6" />
      <Truck numberOfWheels="8" />
      <Skateboard numberOfWheels="4" />
    </div>
  );
}

export default App;
