import { useState } from "react";
import "./App.css";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const colors = [
    "#ff0000",
    "#8968cd",
    "#00FF00",
    "#542c20",
    "#c8ff76",
    "#b21ac1",
  ];

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };
  return (
    <div className="App" style={{ backgroundColor }}>
      <h1>Color Picker</h1>

      <div className="color-palette">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={() => handleColorChange(color)}
          ></div>
        ))}
      </div>
      <div className="custom-color-picker">
        <h3>Pick Custom Color</h3>
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => handleColorChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
