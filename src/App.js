import './App.css';
import {useState} from "react";
import Button from './components/Button';

function App() {

  const [color, setColor] = useState ("")
  
  return (
    <div className={`App ${color}`}>
      <div>
        <h1>Color Switcher</h1>
        <Button color="red" setColor={setColor} />
        <Button color="green" setColor={setColor} />
        <Button color="blue" setColor={setColor} />
        <Button color="purple" setColor={setColor} />
        <Button color="hotpink" setColor={setColor} />
      </div>
    </div>
  );
}

export default App;
