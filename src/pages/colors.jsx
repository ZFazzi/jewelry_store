import { useState } from "react";    //could also be imported from react-color-palette, have installed it but decided not to use it

function ColorPicker() {
  const [color, setColor] = useState("#000000");

  const colorChange = (event) => {
    setColor(event.target.value);    // updates the color with the value selected by the user
  };
  
  return (
    <div className="color-page">
      <h1>Pick a Color</h1> 
      <label htmlFor="colorInput">Choose a color here: </label>  
      <input
        type="color"
        id="colorInput"
        value={color}
        onChange={colorChange}
      />
      <p>{color}</p>
      <div className="color-display" style={{ backgroundColor: color }}>
      </div>
    </div>
  );
}

export default ColorPicker;
