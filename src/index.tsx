import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const App = () => {
  const [fontSize, setFontSize] = useState(12);

  return (
    <>
      <div style={{ fontSize }}>This is my test React project.</div>
      <button type="button" onClick={() => setFontSize(fontSize + 5)}>
        Increase font size!
      </button>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
