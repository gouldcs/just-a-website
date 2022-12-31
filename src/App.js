import './App.css';
import {Tuesdays} from './Tuesdays';

function App() {
  return (
    <div className="App animated2 flash3">
      <div className={"animated flash"}>
        <h1>Nothing to see here</h1>
        <p>This is just a website.</p>
        <marquee>Hi Cameron</marquee>
        <blink>Hi Cameron</blink>
      </div>
      {isTuesday() && (<Tuesdays />)}
    </div>
  );
}

function isTuesday() {
    const joemama0 = new Date();

    return joemama0.getDay() === 3;
}

export default App;
