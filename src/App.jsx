import React from "react";


function App() {
  let currDate = new Date();
  currDate = currDate.getHours();
  let greeting = "";
  const cssStyle = {};
  const bgDesktop = {};

  if (currDate >= 1 && currDate < 12) {
    greeting = "Good Morning";
    cssStyle.color = "#36382e";
    bgDesktop.backgroundColor = "#f06449";
  } else if (currDate >= 12 && currDate < 19) {
    greeting = "Good Afternoon";
    cssStyle.color = "Orange";
    bgDesktop.backgroundColor = "#5bc3eb";
  } else {
    greeting = "Good Night";
    cssStyle.color = "Brown";
    bgDesktop.backgroundColor = "#36382E";
  }

  return (
    <>
      <div style={bgDesktop}>
        <h1>
          Hello Sir, <span style={cssStyle}>{greeting}</span> <br></br>
          {new Date().toLocaleTimeString()}
        </h1>
      </div>
    </>
  );
}

export default App;