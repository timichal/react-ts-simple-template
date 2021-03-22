import * as React from "react";
import * as ReactDOM from "react-dom";

const App = () => {
  const [fontSize, setFontSize] = React.useState(12);

  return (
    <>
      <div style={{ fontSize }}>This is my test React project.</div>
      <button type="button" onClick={() => setFontSize(fontSize + 5)}>
        Increase font size!
      </button>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
