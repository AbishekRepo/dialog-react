import { useState } from "react";

function Dialog({ isOpen }) {
  const message = [
    "Get Prepare",
    "Let the interview come",
    "get Offer",
    "Then its your time",
  ];
  const [step, setStep] = useState(2);
  function nextStep() {
    if (step < 4) setStep((step) => step + 1);
  }
  function prevStep() {
    if (step > 1) setStep((step) => step - 1);
  }
  return (
    <div className="overlay">
      <div className="main-dialog">
        <div className="close-container">
          <button onClick={isOpen}>X</button>
        </div>
        <div className="dialog-container">
          <div className="step">
            {[1, 2, 3, 4].map((btn) => {
              return (
                <span key={btn} className={step === btn && "active"}>
                  {btn}
                </span>
              );
            })}
          </div>
          <p className="message">{`step  ${step} : ${message[step - 1]}`}</p>
          <div className="btn-container">
            <button onClick={prevStep}>Previous</button>
            <button onClick={nextStep}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
