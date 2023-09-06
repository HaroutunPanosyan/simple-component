import { useState } from "react";
import "./App.css";

const message = [
  "This is React.",
  "It's as its' name states: Reactive.",
  "It is all about immutability.",
];

function App() {
  // setStep is tied to the state -step (variable)- and this is how React updates the state without mutating the state.
  // step is the variable and setStep is the state that is to be changed. 
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function previousButtonHandler() {
    if (step > 1) setStep((currentStep) => currentStep-1);
  }
  function nextButtonHandler() {
    if (step < 3) setStep((currentStep) => currentStep+1);
  }

  return (
  <>
    <button className="openClose" onClick={() => setIsOpen((openCloseStatus) => !openCloseStatus)}>&times;</button>
  { 
  isOpen && (    
    <div className="container">
      <div className="numbers">
        <div className={step >= 1 ? 'active' : ""}>1</div>
        <div className={step >= 2 ? 'active' : ""}>2</div>
        <div className={step >= 3 ? 'active' : ""}>3</div>
      </div>

      <p className="message">Step {step}: {message[step-1]}</p>

      <div className="buttons">
        <button onClick={previousButtonHandler}>Previous</button>
        <button onClick={nextButtonHandler}>Next</button>
      </div> 
    </div>
  )}
  </>
)}

export default App;