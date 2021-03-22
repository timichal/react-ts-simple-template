import * as React from "react";
import * as ReactDOM from "react-dom";

const App = () => {
  const [projectName, setProjectName] = React.useState("My Test React Project");

  return (
    <>
      <div>{`This is ${projectName}.`}</div>
      <button type="button" onClick={() => setProjectName("My Typescript React Project")}>
        Change name!
      </button>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
