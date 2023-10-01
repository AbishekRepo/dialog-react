import { useState } from "react";
import Dialog from "./assets/components/Dialog";

function App() {
  const [open, setOpen] = useState(false);
  function isOpen() {
    setOpen(!open);
  }
  return (
    <div>
      <button onClick={isOpen}>Open Dialog</button>
      <h1>from react</h1>
      {open && <Dialog isOpen={isOpen} />}
    </div>
  );
}

export default App;
